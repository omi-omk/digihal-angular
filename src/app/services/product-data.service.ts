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
}
  