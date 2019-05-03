import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchBar } from '../models/search-bar.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  formData: SearchBar;

  constructor(private http: HttpClient) { }

  SearchComumune() {
    return this.http.get(environment.ROOT_URL + '/communes?q=' + this.formData.NameCommuneSearch + '&api_token=' + environment.key)
      .toPromise();
  }
}
