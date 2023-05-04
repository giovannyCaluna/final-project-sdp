import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  constructor(private productService: ProductService,private dataService:DataService, private router: Router) { }

  response: any;
  productName: string = "";
  description: string = "";
  category: string = "";
  price: Number=0;
  seller:string="";
  show: Boolean = false;

  submit() {
    this.seller= this.dataService.myData.userNIckname;
    this.productService.registerNewProduct(this.productName,this.description,this.category,this.price,this.seller).subscribe((data) => {
      if (data) {
        console.log(data);
        this.show= true;
        
      }
      this.router.navigateByUrl('/productsUser');
    })
    
  }

}
