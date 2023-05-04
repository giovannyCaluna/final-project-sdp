import { Component, OnInit  } from '@angular/core';
import {ProductService} from '../services/product.service'
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { Product } from '../model/Product';


@Component({
  selector: 'app-product-user',
  templateUrl: './product-user.component.html',
  styleUrls: ['./product-user.component.css']
})
export class ProductUserComponent  implements OnInit{
  checked:Boolean=false;
  buyProducts: any[]=[];



items:any;


  
  products: any;
  displayedColumns: string[] = ['Name', 'Description', 'Category','Price','Buy'];
   initialSelection = [];
 allowMultiSelect = true;
 
   constructor(private userService:UserService, private productService: ProductService,private dataService:DataService, private router: Router) {}
    ngOnInit(): void {
     
    this.productService.getProductsUser(this.dataService.myData.userNIckname).subscribe((data) => {
      this.products = data;
      console.log("hola insisde", data);
      return data;
 
    });}

    logout(){
      this.userService.logout().subscribe(data=>{
        console.log("You are out", data);
        this.router.navigateByUrl('/');
      })

    }
    log(product:any){
     this.buyProducts.push(product);
     console.log("list items" ,this.buyProducts);

    }

    buy(){
      this.buyProducts.forEach(element => {
        this.productService.updateState(element,this.dataService.myData.userNIckname).subscribe((data)=>{
            console.log("We are calling", data);
        })})}}
        
    
    

      