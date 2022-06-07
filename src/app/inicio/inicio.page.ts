import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SacServiceService } from '../services/sac-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  data:any;
  user:any;

  constructor(public fBuild: FormBuilder, public sService:SacServiceService,public router: Router,private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

}
