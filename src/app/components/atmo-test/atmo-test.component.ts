import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

@Component({
  selector: 'app-atmo-test',
  templateUrl: './atmo-test.component.html',
  styleUrls: ['./atmo-test.component.scss']
})

export class AtmoTestComponent implements OnInit {

  posts: Observable<any>;
  readonly ROOT_URL = 'https://api.atmo-aura.fr';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPost() {
    // Transformer une observable en promesse pour récuprer sa reponse
    this.http.get(`https://api.atmo-aura.fr/communes?q=LYON&api_token=d8f8ba259ae810488d3f808d4893f2b1`)
      .toPromise().then((response: any) => {
      console.log(response);
    });
  }

  getusers() {
    // Transformer une observable en promesse pour récuprer sa reponse
      this.http.get(`https://api.atmo-aura.fr/communes/03002/indices?api_token=d8f8ba259ae810488d3f808d4893f2b1`)
        .toPromise().then((response: any) => {
          this.posts = response.indices.data;
          console.log(this.posts);
      });
  }


}
