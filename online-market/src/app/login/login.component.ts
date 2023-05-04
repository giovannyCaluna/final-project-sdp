import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private userService: UserService, private dataService:DataService, private router: Router) {}


 response:any;
  username : string ="";
  password : string ="";
  show: boolean= false;


  submit(){
    this.userService.login(this.username, this.password).subscribe((data) => {
      console.log("data received", data);
      this.dataService.myData=data;
      this.router.navigateByUrl('/productsUser');
    }, (error: HttpErrorResponse) => {
      if (error.status === 404) {
        console.error('The requested resource was not found');
      } else if (error.status === 500) {
        this.router.navigateByUrl('/');

        console.error('An error occurred on the server');
      } else {
        this.router.navigateByUrl('/');

        console.error('An unexpected error occurred 401');
      }
    })
  this.clear();
  // if(this.response.status == 200){
  //   this.show = true;

  // }
  }
  clear(){
  this.username ="";
  this.password = "";
  }

 }
