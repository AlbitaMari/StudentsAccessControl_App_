import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-legal-age',
  templateUrl: './legal-age.page.html',
  styleUrls: ['./legal-age.page.scss'],
})
export class LegalAgePage implements OnInit {

  
  legalAge : any;
  adult: any;
  sub: any;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.adult = this.router.getCurrentNavigation().extras.state;
    this.isAdult();
  }

  isAdult(){
    if(this.adult==true){
      this.legalAge = 1;
    }
    else{
      this.legalAge= 0;
    }
  }

  scannedAgain(){
    this.router.navigateByUrl('/qr-scanner');
  }
}
