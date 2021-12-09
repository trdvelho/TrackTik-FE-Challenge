import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../models/site.model';

const apiURL = 'https://tracktik-challenge.staffr.com';

@Injectable({
  providedIn: 'root'
})
export class TracktikApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSitesList(page: number, itemsPerPage?: number, filter?: any): Promise<any> {
    let filterStr = '';
    console.log(filter);
    
    if(filter && filter.title){
      filterStr += `&title=${this.capitalizeFirstLetter(filter.title)}`;
      console.log(filterStr);
      
    }
    if(filter && filter.firstName){
      filterStr += `&contacts.main.firstName=${filter.contactFirstName}`
    }
    return this.httpClient
      .get(`${apiURL}/sites?_page=${page}${ filterStr ? filterStr : '' }`, { observe: 'response'}).toPromise()
  }
  public getSiteDetail(id: string): Promise<any> {
    return this.httpClient.get(`${apiURL}/sites/${id}`).toPromise();
  }

  public updateSite(id: string, mainContact: any){
    const updateContact = {
      contacts: {
        main: mainContact
      }
    }
    return this.httpClient.patch(`${apiURL}/sites/${id}`, updateContact, this.httpOptions).toPromise();
  }

  public deleteSite(id: string): Promise<any> {
    return this.httpClient.delete(`${apiURL}/sites/${id}`, this.httpOptions).toPromise();
  }

  public addSite(newSite: Site): Promise<any> {
    return this.httpClient.post(`${apiURL}/sites`, newSite , this.httpOptions).toPromise();
  }

  private capitalizeFirstLetter(string) {
    return string.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) ;
  }
}
