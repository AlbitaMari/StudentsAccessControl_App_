import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { SacServiceService } from '../services/sac-service.service';
import { WelcomePage } from '../welcome/welcome.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data:any;
  age:any;
  alumno = {
    code : '',
  }
  user = {
    name:'',
    surname:'',
    email: '',
    dni:'',
    created_at:'',
  };

  clickedImage: any;
  userImage:any;
  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public fBuild: FormBuilder, public sService:SacServiceService,public router: Router,private modalCtrl:ModalController,private camera: Camera) { }

 ngOnInit() {
  this.getUser();
  this.openModal();
  }

  getUser(){  
    this.sService.getUser().then((res:any) => {
      this.user = res.data.data;
      this.age = res.date.date;
      this.alumno = res.alumn.alumn;
      this.clickedImage = localStorage.getItem(this.user.dni);
      })
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: WelcomePage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
      this.setStor(this.clickedImage);
      this.getStor();
    }, (err) => {
      console.log(err);
    });
  
  }

  setStor(clickedImage:any){
    localStorage.setItem(this.user.dni, clickedImage);
  }

  
  getStor(){
    this.clickedImage = localStorage.getItem(this.user.dni);
  }

}
