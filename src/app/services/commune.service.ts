import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Commune } from '../models/commune.model';

@Injectable({
  providedIn: 'root'
})

export class CommuneService {
  formData: Commune;

  constructor(private http: HttpClient) { }

  SearchComumune(data) { 
    console.log(data);
      return this.http.get(environment.ROOT_URL + '/communes?q=' + data + '&api_token=' + environment.key)
      .toPromise();
  }

  IndiceComumune(codeINSEE) {
    return this.http.get(environment.ROOT_URL + '/communes/' + codeINSEE + '/indices?date=now&api_token=' + environment.key)
      .toPromise();
  }

  VigilenceComumune(codeINSEE) {
    return this.http.get(environment.ROOT_URL + '/communes/' + codeINSEE + '/vigilances?date=now&api_token=' + environment.key)
      .toPromise();    
  }

}
