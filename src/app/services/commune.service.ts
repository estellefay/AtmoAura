import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commune } from '../models/commune.model';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
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
  
//   SearchComumune() { 
//     return this.http.get(environment.ROOT_URL + '/communes?q=' + this.formData.NameCommuneSearch + '&api_token=' + environment.key)
//     .toPromise();
// }

  GetAllCommunes() {
    return this.http.get(environment.ROOT_URL + '/communes?api_token=' + environment.key)
    .toPromise();
   // https://api.atmo-aura.fr/communes?api_token=d8f8ba259ae810488d3f808d4893f2b1 
  }
}
