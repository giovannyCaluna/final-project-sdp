import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, RouterLink } from '@angular/router';





@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  response: any;
  username: string = "";
  userLastName: string = "";
  userNickName: string = "";
  email: string = "";
  password: String = '';
  show: Boolean = false;
  validUserNickname: Boolean = true;
  validEmail: Boolean = true;
  validUser: Boolean = true;
  listUSer: any = [];
  listMails: any = [];

ngOnInit(): void {
  this.validUser = true;
  
}

 

  submit() {
    this.userService.registerNewUser(this.userNickName,this.username,this.userLastName,this.email,this.password).subscribe((data) => {
      if (data) {
        console.log(data);
        this.show= true;
        
      }
      this.router.navigateByUrl('/');
    })
    
  }

  validateUser() {
    this.userService.validateUser(this.userNickName ).subscribe((data) => {
      if (data) {
        this.listUSer = data;
      }
    })
    this.validUSer();
  }
  validateMail() {
    this.userService.validateEmail(this.email).subscribe((data) => {
      if (data) {
        this.listMails = data;
      }
    })
    this.validUSer();
  }
  validUSer() {
    console.log(this.email)
    console.log(this.userNickName)
    if (this.listUSer[0] == undefined && this.listMails[0] == undefined) {
      this.validUser = true;
    } else {
      this.validUser = false;
    }
    console.log(this.listMails[0] == undefined);
    console.log(this.listUSer[0] == undefined);
    console.log(this.validUser);
  }
}

