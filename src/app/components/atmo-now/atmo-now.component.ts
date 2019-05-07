import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/services/commune.service';


@Component({
  selector: 'app-atmo-now',
  templateUrl: './atmo-now.component.html',
  styleUrls: ['./atmo-now.component.scss']
})
export class AtmoNowComponent implements OnInit {

  constructor(
    protected service:CommuneService
  ) { }

  ngOnInit() {
    // if (this.service.formData.code != null) {
    //   this.GetIndiceCommune(this.service.formData.code);
    // }
  }

  GetIndiceCommune(codeINSEE) {
    debugger;
    this.service.IndiceComumune(codeINSEE).then((res: any) => {
      console.log(res);
    })
        //Remise à zero de serach commune
  }

}
