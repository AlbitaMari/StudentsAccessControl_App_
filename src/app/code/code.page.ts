import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SacServiceService } from '../services/sac-service.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  code:any;

  constructor(public sService:SacServiceService,public router: Router) { }

  ngOnInit() {
    this.getCode();
  }

  getCode(){
    this.sService.getCode().then((res:any) => {
      this.code = res.encode;
      })
  }

  onLogout(){
    this.router.navigateByUrl('/');
  }
}
