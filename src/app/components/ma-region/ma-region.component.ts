import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-ma-region',
  templateUrl: './ma-region.component.html',
  styleUrls: ['./ma-region.component.scss']
})
export class MaRegionComponent implements OnInit {

  // Déclaration de variable
  //essageRegion: Observable<any>;
  messageRegion: string;




  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMessageRegion();
  }

  // Méthode qui récupère le message de la région
  getMessageRegion() {
    // Transformer une observable en promesse pour récuprer sa reponse
    this.http.get(environment.ROOT_URL + '/commentaire?date=now&api_token=' + environment.key)
      .toPromise().then((response: any) => {
        if (response.commentaire === null) {
           this.messageRegion = "Pas de commentaire aujourdhui" ;        
        } else {
          this.messageRegion = response.commentaire;
        }
    });
  }
}
