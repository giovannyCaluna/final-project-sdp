import { Component, OnInit  } from '@angular/core';
import {ProductService} from '../services/product.service'
import { Router,NavigationExtras  } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
 products: any;
 displayedColumns: string[] = ['Name', 'Description', 'Category','Price'];


  constructor(private productService: ProductService, private router: Router) {}

  
   ngOnInit(): void {
   this.productService.getProducts().subscribe((data) => {
     this.products = data;
     return data;

   });


  }
   
 
  
 

}
