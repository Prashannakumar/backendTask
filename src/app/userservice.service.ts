import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http: HttpClient) { }

  userRegistration(data: any) {
    return this.http.post<any>("http://localhost:3456", data);
  }

  userDetails(){
    return this.http.get<any>("http://localhost:3456");
  }
  deleteUser(un:any){
    // console.log(name);
    return this.http.delete<any>("http://localhost:3456/"+un);
  }
}
