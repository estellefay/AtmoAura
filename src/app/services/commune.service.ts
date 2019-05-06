import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CommuneService {


  constructor(private http: HttpClient) { }

  SearchComumune(data) { 
    console.log(data);
      return this.http.get(environment.ROOT_URL + '/communes?q=' + data + '&api_token=' + environment.key)
      .toPromise();
  }
}
