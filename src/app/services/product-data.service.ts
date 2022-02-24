import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  
  constructor(private _httpClient:HttpClient) { }

  public find(product: any):any{
    console.log(product);
    return this._httpClient.post('https://digihal.herokuapp.com/api/',product);
  }
  product:any

  
  setProduct(data: any){
    localStorage.setItem('dataSource', JSON.stringify(data));
    this.product=JSON.parse(localStorage.getItem('dataSource')!);
    
    

    
    // console.log(this.product);
    console.log("data submitted");
  }
  getProduct(){
    console.log("called getproduct");
    // console.log(this.product);
    return this.product;
    
  }
}
  