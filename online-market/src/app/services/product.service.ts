
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  // login(email: any, password: any) {
  //   // username: someone@someone.com, password: someonepw

  //   /*const body = {
  //     username: 'someone@someone.com',
  //     password: 'someonepw'
  //   };*/

  //   let body = new URLSearchParams();
  //   body.set('username', email);
  //   body.set('password', password);

  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

  //   return this.http.post(environment.baseServerUrl + '/login', body.toString(), {headers: headers, withCredentials: true});
  // }

  // logout() {
  //   let headers = new HttpHeaders();
  //   // headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  //   headers = headers.set('Accept', '*/*');

  //   return this.http.post(environment.baseServerUrl + '/logout', {}, {headers: headers, responseType: 'text', withCredentials: true});
  // }

  getProducts(){
    let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.set('Accept', '*/*');
    return this.http.get(environment.baseServerUrl+'product/products')
  }
  getProductsUser(userNIckname:any){

      let headers = new HttpHeaders();
      let body = new URLSearchParams();
      body.set('userNIckname', userNIckname);
      headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(environment.baseServerUrl + 'product/products', body.toString(), {headers: headers, withCredentials: true});
    
    
}
registerNewProduct(productName:string,description:string, category:string, price:any ,seller:any){
  let body = new URLSearchParams();

  body.set('name', productName);
  body.set('description', description);
  body.set('category', category);
  body.set('price', price);
  body.set('seller',seller)

  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post(environment.baseServerUrl + '/product/register', body.toString(), {headers: headers, withCredentials: true});
}
updateState(product:any,seller:any){

  console.log(product);

    let body = new URLSearchParams();
    body.set('name', product.name);
    body.set('seller',seller );
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/raw');
    return this.http.post(environment.baseServerUrl + '/product/updateState',  body.toString(), {headers: headers, withCredentials: true});
}


  

 


  
//});
}

