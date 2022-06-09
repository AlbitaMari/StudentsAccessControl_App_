import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SacServiceService } from '../services/sac-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  formPassword : FormGroup;
  isSubmitted = false;
  data:any;

  constructor(private router:Router,public fBuild: FormBuilder, public sService:SacServiceService) { }

  ngOnInit() {    
    this.formPassword = this.fBuild.group({
      'email': new FormControl ("",[Validators.required,Validators.email]),
    })
  }


  onLogout(){
    this.router.navigateByUrl('/');
  }

}
