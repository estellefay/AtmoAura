import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-ma-region',
  templateUrl: './ma-region.component.html',
  styleUrls: ['./ma-region.component.scss']
})
export class MaRegionComponent implements OnInit {

  // Déclaration de variable
  messageRegion: Observable<any>;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMessageRegion();
  }

  // Méthode qui récupère le message de la région
  getMessageRegion() {
    // Transformer une observable en promesse pour récuprer sa reponse
    this.http.get(environment.ROOT_URL + '/commentaire?date=now&api_token=' + environment.key)
      .toPromise().then((response: any) => {
      this.messageRegion = response.commentaire;
      console.log(this.messageRegion);
    });
  }

}
