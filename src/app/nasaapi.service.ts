import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaapiService {

  constructor(public http: HttpClient) { }

  getImg(){
    return this.http.get<any>("https://api.nasa.gov/planetary/apod?api_key=objNHpQyrV7bS4VreGhF9TIbfjjZsHaH6qsOIjmh")
  }

  getTemp(){
    return this.http.get<any>("http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=3a3eb62e70b9745f96cb7c04245a9cb8")
  }

}
