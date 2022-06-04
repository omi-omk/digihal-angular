import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductCrudService {

  constructor(private _httpClient:HttpClient) { }

  public delete_prouct(str:string):any{
    return this._httpClient.get('http://localhost:3000/crud/delete/'+str);
    // return this._httpClient.get('https://digihal.herokuapp.com/crud/delete/'+str);
  }
  public add_product(product:any):any{
    return this._httpClient.post("http://localhost:3000/crud/add/",product);
    // return this._httpClient.post("https://digihal.herokuapp.com/crud/add/",product);
  }
  product:any

  
  
}
