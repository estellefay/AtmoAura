import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NgForm} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  listregions: any;

  constructor(
    protected service:SearchBarService
    ) { }

  ngOnInit() {
    this.resetForm();
  }

    // Reset le formulaire
    resetForm(form?: NgForm) {
      if (form = null)
        form.resetForm();
      this.service.formData = {
        NameCommuneSearch: "",
      };
    }

  // Méthode qui récupère le message de la région
  searchCommune(form: NgForm) {
    this.service.SearchComumune().then((res: any) => {
      this.listregions = res.data;
      console.log(res.data);
    })
    console.log(this.listregions)
  }
}
