import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  siteTitle: string;
  contactFirstName: string;

  constructor(
    private popOverCtrl: PopoverController
  ) { }

  ngOnInit() {}

  applyFilter(){
    if( this.siteTitle || this.contactFirstName) {
      this.popOverCtrl.dismiss(
        { title: this.siteTitle, contactFirstName: this.contactFirstName}
      );
    } else {
      console.log('p');
      
      this.popOverCtrl.dismiss();
    }
  }

}
