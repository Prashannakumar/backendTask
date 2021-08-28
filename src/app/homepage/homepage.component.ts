import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NasaapiService } from '../nasaapi.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  nasaimg: any;
  expl: string = '';

  temp: any;

  constructor(public apiSer: NasaapiService, public http: HttpClient, public userSer: UserserviceService) { }

  ngOnInit(): void {

    /* this.apiSer.getImg().subscribe((data: any) => {
       console.log(data);
       this.nasaimg = data.url;
       this.expl = data.explanation;
     }, (error: any) => {
       console.log(error);
     });
 
     this.apiSer.getTemp().subscribe((data:any) => {
       console.log(data);
       this.temp = data.main.temp;
     }) */



  }

  doLogin(un: string, pw: string, email: string) {

    this.userSer.userRegistration({ un, pw, email }).subscribe((data: string) => {
      console.log(data);

    }, (error: any) => {

      console.log(error);

    });

  }
  userArr: any;
  getUsers() {
    this.userSer.userDetails().subscribe((data: any) => {
      console.log(data);
      this.userArr = data;
    }, (error: any) => {
      console.log(error);
    });
  }
  removeUser(un: any) {
    console.log(un);
    this.userSer.deleteUser(un).subscribe((data: any) => {
      console.log(data);
      this.getUsers();

    }, (error: any) => {
      console.log(error);

    });
  }
}
