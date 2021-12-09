import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewSiteComponent } from './new-site/new-site.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, NewSiteComponent, FilterComponent]
})
export class HomePageModule {}
