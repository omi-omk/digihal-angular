import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCrudService } from 'src/app/services/product-crud.service';


@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {
  public response:any;
  constructor(private _service:ProductCrudService,private router: Router) { }
  submit(data: any){
    const str = String(data.form.controls.mobiles.value)
    this._service.delete_prouct(str).subscribe((res: any)=>{
      this.response =  res;
      console.log("Delete "+res);
      
    }
    )
    this.router.navigate(['/admin-dashboard']);
  }
  ngOnInit(): void {
  }

}
