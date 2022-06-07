import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SacServiceService } from '../services/sac-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  token:any;
  data:any;
  formLogin : FormGroup;
  isSubmitted = false;
  email:any;
  password:any;

  constructor(public fBuild: FormBuilder, public sService:SacServiceService,public router: Router ) {}
  
  ngOnInit(){
    this.formLogin = this.fBuild.group({
      'email': new FormControl ("",[Validators.required,Validators.minLength(5)]),
      'password': new FormControl ("",[Validators.required, Validators.minLength(5)])
    })
  }
  get errorControl() {

    return this.formLogin.controls;

  }

  submitForm() {

    this.isSubmitted = true;

    if (!this.formLogin.valid) {
      console.log('Porfavor, completa todos los campos obligatorios!')
      return false;
    } else {
      this.sService.login(this.formLogin.value.email,this.formLogin.value.password).then(data => {
        this.data = data;
        this.token = this.data.success.token;
        this.email = this.data.email.email;
        console.log(this.email);
        if(this.email === "admin@admin.com"){
          this.router.navigateByUrl('/qr-scanner');
        }else{
          this.router.navigateByUrl('/inicio');
        }
      });
    }
  }
}
