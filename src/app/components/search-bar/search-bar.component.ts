import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm} from '@angular/forms';
import { CommuneService } from 'src/app/services/commune.service';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  listregions: any;
  private searchTerms = new Subject<string>();
  vigilanceCommune: any;
  indicesCommune: any;
  nameCommune: any;
  codeInsse: any;


  constructor(
    protected service:CommuneService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
  }

  getBackground(dataColor) {
    const color = dataColor;
    const style = `background-color: ${color}`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  searchCommune(nameCommune) {
    this.service.SearchComumune(nameCommune).then((res: any) => {
      this.listregions = res.data;
    })
    //Afficher le term selectionner et passer au suivant
    this.searchTerms.next(nameCommune);
  }

  GetInfoCommune(codeINSEE) {
    this.codeInsse = codeINSEE;
    this.service.IndiceComumune(codeINSEE).then((res: any) => {   
      this.indicesCommune = res.indices;
      this.nameCommune = res.commune;  
    })
    this.service.VigilenceComumune(codeINSEE).then((res: any) => {
      console.log(res);  
      if (res.vigilances != null) {
        this.vigilanceCommune = res.vigilances;
      }
    })
    this.listregions = null;
  }
}

