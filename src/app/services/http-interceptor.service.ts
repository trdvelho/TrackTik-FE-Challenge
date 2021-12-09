import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private alertCtrl: AlertController
  ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(
          () => {},
          async (err: any) => {
            if (err instanceof HttpErrorResponse) {
              console.log('error', err);
            }

            if(err.status != 200){
              const alert =  await this.alertCtrl.create({
                header: 'Error alert!',
                message: 'An error happened, please try again',
                backdropDismiss: false,
                buttons: ['Ok']
              });
              alert.present();
            }
            
          })
      );
  }
}

