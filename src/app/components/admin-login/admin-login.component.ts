import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router) { }
  alert = false;
  ngOnInit(): void {
  }
  submit(data: any){
    if(data.form.controls.username.value==="omkar" && data.form.controls.password.value==="omkar")
    {
      this.router.navigate(['/admin-dashboard']);
    }
    else
    {
      this.alert = true;
    }
  }
}