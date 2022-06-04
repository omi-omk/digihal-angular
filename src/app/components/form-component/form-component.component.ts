import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProductDataService } from 'src/app/services/product-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  public response:any;
  pricelow= false;
  constructor(private _service:ProductDataService, private route:Router) { }

  ngOnInit(): void {
  }

  public findProduct(product: any){
    this._service.find(product).subscribe((res: any)=>{
      this.response =  res;
      this._service.setProduct(this.response);
      this.route.navigate(['../output']);
    })
    
    
}

parameters = [
  'Design',
  'Display',
  'Software',
  'Performance',
  'Battery',
  'Camera'
];


submit(data: any){
  const number = Number(data.form.controls.price.value);
  
  if (number<7500)
  {
    this.pricelow = true;
    this.route.navigate(['/input']);
    return;
  }
  const priority = new Map<string,number>()
  for(let i=0; i<6;i++)
  {
     priority.set(this.parameters[i],i+1)
     
  }
  this.findProduct({
    "Design" :data.form.controls.design.value,
    "Display" :data.form.controls.display.value,
    "Software" :data.form.controls.software.value,
    "Performance" :data.form.controls.performance.value,
    "Battery" :data.form.controls.battery.value,
    "Camera" :data.form.controls.camera.value,
    "Price" :data.form.controls.price.value,
    "Design_p" :priority.get("Design"),
    "Display_p" :priority.get("Display"),
    "Software_p" :priority.get("Software"),
    "Performance_p" :priority.get("Performance"),
    "Battery_p" :priority.get("Battery"),
    "Camera_p" :priority.get("Camera")
});
}
drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.parameters, event.previousIndex, event.currentIndex); 
}
}
