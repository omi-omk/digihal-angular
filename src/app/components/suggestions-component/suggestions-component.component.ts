import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-suggestions-component',
  templateUrl: './suggestions-component.component.html',
  styleUrls: ['./suggestions-component.component.css']
})
export class SuggestionsComponentComponent implements OnInit {
  productArray = JSON.parse(localStorage.getItem('dataSource')!);
  product1=this.productArray[0];
  product2=this.productArray[1];

key_specs_keys=['Display','Processor','Front Camera','Rear Camera','RAM','Storage','Battery','OS'];
key_specs_values1:any[]=[];
key_specs_values2:any[]=[];
counter(i: number) {
  return new Array(i);
}

 
  changeChoice(value:any){
    localStorage.setItem('choice',value);

  }
  

  ngOnInit(): void {
    for(let key of this.key_specs_keys)
    {
      key = key.split(' ').join('_');
      key = 'k_'+key;
      //console.log(key);
      this.key_specs_values1.push(this.product1[key]);
    }
    for(let key of this.key_specs_keys)
    {
      key = key.split(' ').join('_');
      key = 'k_'+key;
      //console.log(key);
      this.key_specs_values2.push(this.product2[key]);
    }
  }

}
