
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { NgForm} from '@angular/forms';
import { CommuneService } from 'src/app/services/commune.service';
import { Commune } from '../../models/commune.model';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  listregions: any;
  private searchTerms = new Subject<string>();

  constructor(
    protected service:CommuneService
    ) { }

  ngOnInit(form?: NgForm) {
    while (form != null) {
      console.log('coucou');
    }
  }

  //Méthode qui récupère le message de la région
  // searchCommune(form: NgForm) {
  //   this.service.SearchComumune().then((res: any) => {
  //     this.listregions = res.data;
  //     console.log(res.data);
  //   })
  //   console.log(this.listregions)
  // }
  
  searchCommune(nameCommune) {
    this.service.SearchComumune(nameCommune).then((res: any) => {
      this.listregions = res.data;
    })
    //Afficher le term selectionner et passer au suivant
    this.searchTerms.next(nameCommune);
  }

  test(codeINSEE) {
    console.log(codeINSEE);
    debugger;
  }
}
