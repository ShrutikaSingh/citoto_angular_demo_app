import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 products=[
   {
     "name":"abhishek","branch":"cse","roll_no":203501
   },
   {
    "name":"parth","branch":"entc","roll_no":203533
   },
   {
    "name":"parth","division":"panel4","roll_no":203540
   }
 ]

  constructor() { }

  getProductList(){
    return this.products;
  }
}
