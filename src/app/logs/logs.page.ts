import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SacServiceService } from '../services/sac-service.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {

  logs:any;
  alumno = {
    name : '',
    surname : '',
  }
  user = {
    name : '',
    surname : '',
  }

  constructor(public fBuild: FormBuilder, public sService:SacServiceService,public router: Router,private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getLogs();
  }

  getLogs(){  
    this.sService.getLogs().then((res:any) => {
      this.logs = res.logs.logs;
      this.alumno = res.alumno.alumno;
      this.user = res.user;
      console.log(this.logs);
      console.log(this.alumno);
      console.log(this.user);
      })
  }

  onLogout(){
      this.router.navigateByUrl('/');
  }

}
