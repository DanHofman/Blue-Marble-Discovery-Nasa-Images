import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class GrabNasaService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get("https://epic.gsfc.nasa.gov/api/natural");
  }
}
