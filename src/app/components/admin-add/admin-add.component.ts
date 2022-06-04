import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCrudService } from 'src/app/services/product-crud.service';


@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(private _service:ProductCrudService,private router: Router) { }
  public response:any;

  public createProduct(product: any){
    this._service.add_product(product).subscribe((res: any)=>{
      this.response =  res;
      
    })  
    this.router.navigate(['/admin-dashboard']);
  }

  submit(data:any){
    this.createProduct({
      "mobiles" :data.form.controls.mobiles.value,
      "Link" :data.form.controls.link.value,
      "b_price" :data.form.controls.b_price.value,
      "design" :data.form.controls.design.value,
      "display" :data.form.controls.display.value,
      "software" :data.form.controls.software.value,
      "performance" :data.form.controls.performance.value,
      "battery_life" :data.form.controls.battery.value,
      "camera" :data.form.controls.camera.value,
      "value_for_money" :data.form.controls.value_for_money.value
    })
  }

  
  ngOnInit(): void {
  }

}
