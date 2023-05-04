import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroments';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  login(username: any, password: any) {
    // username: someone@someone.com, password: someonepw

    /*const body = {
      username: 'someone@someone.com',
      password: 'someonepw'
    };*/

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(environment.baseServerUrl + 'login', body.toString(), {headers: headers, withCredentials: true});
  }

  logout() {
    let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.set('Accept', '*/*');

    return this.http.post(environment.baseServerUrl + '/logout', {}, {headers: headers, responseType: 'text', withCredentials: true});
  }

  validateUser(userNIckname:any){
    let body = new URLSearchParams();
    body.set('userNIckname', userNIckname);

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(environment.baseServerUrl + 'user/validateUser', body.toString(), {headers: headers, withCredentials: true});

  }

  validateEmail(email:any){
    let body = new URLSearchParams();
    body.set('email', email);

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(environment.baseServerUrl + 'user/validateMail', body.toString(), {headers: headers, withCredentials: true});



  }

  registerNewUser(userNIckname:any,name:any, lastName:any, email:any,password:any ){
    let body = new URLSearchParams();

    body.set('userNIckname', userNIckname);
    body.set('name', name);
    body.set('lastName', lastName);
    body.set('email', email);
    body.set('password', password);

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(environment.baseServerUrl + '/register', body.toString(), {headers: headers, withCredentials: true});
  }


}
