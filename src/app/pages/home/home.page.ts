import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, ToastController } from '@ionic/angular';

import { TracktikApiService } from '../../services/tracktik-api.service';
import { NewSiteComponent } from './new-site/new-site.component';
import { Site } from '../../models/site.model';
import { FilterComponent } from './filter/filter.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  filterInput: string;
  filterData;
  fakeList = Array(10);
  sitesList: Site[] = [];
  sitesTotalCount: number;
  currentPage: any;

  constructor(
    private trackTikService: TracktikApiService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit(){
    this.getSiteListData();
  }

  getSiteListData(){
    this.filterData = null;
    this.sitesList = null;
    
    this.trackTikService.getSitesList(1, null).then( sitesList =>{
      // 2 seconds to show ion-skeleton loading
      setTimeout( ()=>{
        this.sitesList = [...sitesList.body];
        this.currentPage = 1;
        this.sitesTotalCount = sitesList.headers.get('X-Total-Count');
      }, 1500);
    })
  }

  async getPage(pagina: number) {
    this.sitesList = null;

    await this.trackTikService.getSitesList(
      pagina, null, this.filterData)
      .then((response: any) => {
        setTimeout( ()=>{
          this.currentPage = pagina;
        this.sitesList = response.body;
        },200);
    });
   
  }

  deleteSite(index: number){
    this.trackTikService.deleteSite(this.sitesList[index].id).then( async() => {
      this.sitesList.splice(index, 1);
      const deleteMessage = await this.toastCtrl.create({
        message: 'Site deleted successfully',
        duration: 1500,
        position: 'top'
      });
      deleteMessage.present();
    })
  }

  async addSite(){
    const newSite = await this.modalCtrl.create({
      component: NewSiteComponent
    });
    newSite.present();

    newSite.onDidDismiss().then( (newSite) => {
    })
  }

  async showFilter(event){
    const filterPopOver = await this.popoverCtrl.create({
      component: FilterComponent,
      event: event
    });
    filterPopOver.present();

    filterPopOver.onDidDismiss().then( (filter: any) => {
      if(filter.data) {
        console.log(filter);
        const filterParams = { title: filter.data.title, firstName: filter.data.contactFirstName };
        this.trackTikService.getSitesList(1, null, filterParams )
          .then( async (result) => {
            if(result.body.length == 0){
              const message = await this.toastCtrl.create({
                message: 'None sites found for your filter',
                duration: 2000,
                position: 'top'
              });
              message.present();
            }
            else {
              if(filterParams) this.filterData = filterParams;
              this.sitesList = result.body;
              this.sitesTotalCount = result.headers.get('X-Total-Count');
            }
            console.log(result);
          })
      }
    })
  }
}
