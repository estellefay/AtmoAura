
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { NgForm} from '@angular/forms';
import { CommuneService } from 'src/app/services/commune.service';
import { Commune } from '../../models/commune.model';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  listregions: any;
  listCommuneAll:any;
 

  private searchTerms = new Subject<string>();

  constructor(
    protected service:CommuneService
    ) { }

  ngOnInit(form?: NgForm) {
    this.resetForm();
    this.getAllCommunes();
    while (form != null) {
      console.log('coucou');
    }
  }

  // Reset le formulaire
  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      NameCommuneSearch: "",
    };
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

  // Récuperer la list de toutes les communes
  //Attenteion cete methode affice les 50 premier resulats
  getAllCommunes() {
    this.service.GetAllCommunes().then((res: any) => {
      this.listCommuneAll = res.data;
      console.log(this.listCommuneAll);
    })
  }
  // Sauvegarde de toutes le ville dabs keloval storage


}
