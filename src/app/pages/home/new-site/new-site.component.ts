import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Site } from 'src/app/models/site.model';
import { TracktikApiService } from 'src/app/services/tracktik-api.service';

@Component({
  selector: 'app-new-site',
  templateUrl: './new-site.component.html',
  styleUrls: ['./new-site.component.scss'],
})
export class NewSiteComponent {
  site: Site;

  public form: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private trackTikService: TracktikApiService,
    private toastCtrl: ToastController
  ) {
    this.form = this.formBuilder.group({
      title: [ '', [Validators.required]],
      street: [ '', [Validators.required]],
      city: [ '', [Validators.required]],
      country: [ '', [Validators.required]],
      state: [ '', [Validators.required]],
      zip: [ '', [Validators.required]],
      firstName: [ '', [Validators.required]],
      lastName: [ '', [Validators.required]],
      contactJobTitle: [ '', [Validators.required]],
      contactEmail: [ '' ],
      contactPhoneNumber: [ '', [Validators.required]],
      contactStreet: [ '' ],
      contactCity: [ '' ],
      contactCountry: [ '' ],
      contactState: [ '' ],
      contactZip: [ '' ]
    });
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  addSite(){
    const newSite: Site = {
      title: this.form.value.title,
      address: {
        city: this.form.value.city,
        state: this.form.value.state,
        country: this.form.value.country,
        street: this.form.value.street,
        zipCode: this.form.value.zip
      },
      contacts: {
        main: {
          firstName: this.form.value.firstName,
          lastName: this.form.value.lastName,
          jobTitle: this.form.value.contactJobTitle,
          address: {
            city: this.form.value.contactCity,
            street: this.form.value.contactStreet,
            zipCode: this.form.value.contactZip,
            country: this.form.value.contactCountry,
            state: this.form.value.contactState
          },
          email: this.form.value.contacEmail,
          phoneNumber: this.form.value.contactPhoneNumber
        }
      }
    }

    this.trackTikService.addSite(newSite).then( async(newSiteAdded: Site) => {
      const toast = await this.toastCtrl.create({
        message: 'Site added successfully!',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      this.modalCtrl.dismiss(newSiteAdded);
    })

  }

}
