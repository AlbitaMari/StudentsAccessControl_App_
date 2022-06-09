import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScannerOptions,BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { SacServiceService } from '../services/sac-service.service';
import { WelcomePage } from '../welcome/welcome.page';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {


  encodedData: any;
  scannedCode:any;
  alumno: any;
  adult:any;
  logs:any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private scanner: BarcodeScanner,public sService:SacServiceService,public router: Router,private modalCtrl: ModalController) {
    this.encodedData = "Programming isn't about what you know";
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
   }

  ngOnInit() {
    this.openModal();
    this.getLogs();
  }

  scanBRcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: true,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a QrCode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417 ',
      orientation: 'landscape',
    };
    this.scanner.scan().then(res => {
        this.scannedBarCode = res['text'];
        this.sService.getPermission(this.scannedBarCode).then((res:any) => {
          this.adult = res.adult.adult;
          this.openModall(this.adult);
      })
      }).catch(err => {
        alert(err);
      });
  }

  openModall(adult){
    this.router.navigate(['/legal-age'],{state:adult});
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: WelcomePage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  getLogs(){
    this.sService.getArray().then((res:any) => {
        this.logs = res.logs.logs;
        console.log(this.logs);
      })
  }

  ionViewWillEnter(){
    this.getLogs();
  }

  onLogout(){
    this.router.navigateByUrl('/');
  }

}
