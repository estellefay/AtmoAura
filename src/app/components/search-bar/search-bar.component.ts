import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm} from '@angular/forms';
import { CommuneService } from 'src/app/services/commune.service';




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

  ngOnInit() {
  }
  
  searchCommune(nameCommune) {
    this.service.SearchComumune(nameCommune).then((res: any) => {
      this.listregions = res.data;
    })
    //Afficher le term selectionner et passer au suivant
    this.searchTerms.next(nameCommune);
  }

  GetIndiceCommune(codeINSEE) {
    this.service.IndiceComumune(codeINSEE).then((res: any) => {
      console.log(res);
    })
    this.listregions = null;
    //Remise à zero de serach commune
  }
}

