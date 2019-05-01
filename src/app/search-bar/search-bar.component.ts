import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  nameComnune: Observable<any>;
  inputNameComnune: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // Méthode qui récupère le message de la région
  searchCommune(inputNameComnune) {
    console.log(this.inputNameComnune);
    console.log('coucou');

    this.http.get(environment.ROOT_URL + '/communes?q=' + this.inputNameComnune + '&api_token=' + environment.key)
      .toPromise().then((response: any) => {
        console.log(response);
      // this.nameComnune = response;
    });
  }
}
