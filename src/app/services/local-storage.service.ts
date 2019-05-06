import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  // Enregistrer les data
  setDatas(key: string, datas: any) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, JSON.stringify(datas));
      resolve();
    })
  }

  //Obtenir les data
  getDatas(key: string) {
    return new Promise((resolve, reject) => {
      const datas: any = JSON.parse(localStorage.getItem(key));
      resolve(datas);
    })
  }


}
