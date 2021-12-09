import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Site } from 'src/app/models/site.model';
import { TracktikApiService } from 'src/app/services/tracktik-api.service';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.page.html',
  styleUrls: ['./site-detail.page.scss'],
})
export class SiteDetailPage implements OnInit {
  editSite: boolean = false;
  site: Site
  constructor(
    private route: ActivatedRoute,
    private trackTickService: TracktikApiService,
    private toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.trackTickService.getSiteDetail(id).then( siteDetail => {
        console.log(siteDetail);
        
        this.site = siteDetail;
      })
    });
  }

  getAddressInfo(){
    return `${this.site.contacts.main.address.street}, 
            ${this.site.contacts.main.address.city}, ${this.site.contacts.main.address.state},
            ${this.site.contacts.main.address.zipCode}`
  }

  isEditting(){
    this.editSite = !this.editSite;
  }

  updateInfos(){
    this.trackTickService.updateSite(this.site.id, this.site.contacts.main ).then( async (res: Site) => {
      this.site.contacts.main = res.contacts.main;
      this.editSite = false;
      const toast = await this.toastCtrl.create({
        message: 'Contact updated successfully!',
        duration: 2000,
        position: 'top'
      })
      toast.present();

      console.log(res);
    })
  }

}
