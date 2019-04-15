import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  products;
  constructor( private productService : ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getProductList();
  }

}
