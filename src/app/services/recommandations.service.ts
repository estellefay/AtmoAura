import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommandationsService {

  constructor(private http: HttpClient) { }

  GetAllRecommandations() { 
      return this.http.get(environment.ROOT_URL + '/bons_gestes?api_token=' + environment.key)
      .toPromise();
  }
}
