import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  
  constructor(private _httpClient:HttpClient) { }

  public find(product: any):any{
    return this._httpClient.post('https://digihal.herokuapp.com/api/',product);
  }
  product:any

  
  setProduct(data: any){
    this.product=data;
    console.log("data submitted");
  }
  getProduct(){
    console.log("called getproduct");
    console.log(this.product);
    return this.product;
    
  }
}
  