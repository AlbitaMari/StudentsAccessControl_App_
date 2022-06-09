import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SacServiceService {

token:any;
user:any;
logs:any;
code:any;
alumno:any;
scannedCode:any;
adult:any;
array:any;
password:any;
success:any;

apiUrl = "http://alba.desarrollowebcadiz.com/api/";

  constructor(private http: HttpClient) { }

  login(email,password){
    return new Promise(resolve => {
      this.http.post<any>(this.apiUrl + 'login',
      {
        email: email,
        password: password,
      })
        .subscribe(data => {
          this.token = data.success.token;
          resolve(data)
        });
    });
  }

  getUser(){
    return new Promise(resolve => {
      this.http.get<any>(this.apiUrl + 'users',{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
      })
      .subscribe(data => {
        this.user = data;
        resolve(data)
      err => {
        console.log(err)
      }})
    })
  }

  getLogs(){
    return new Promise(resolve => {
      this.http.get<any>(this.apiUrl + 'logs',{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
      })
      .subscribe(data => {
        this.logs = data;
        console.log(this.logs);
        resolve(data)
      err => {
        console.log(err)
      }})
    })
  }

  getCode(){
    return new Promise(resolve => {
      this.http.get<any>(this.apiUrl + 'qr',{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
      })
      .subscribe(data => {
        this.code = data;
        resolve(data)
      err => {
        console.log(err)
      }})
    })
  }

  getPermission(scannedBarCode:any){
    return new Promise(resolve => {
      this.http.post<any>(this.apiUrl + 'scannedCode',{
        scannedBarCode: scannedBarCode,
      },
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
      })
        .subscribe(data => {
          this.adult = data;
          resolve(data)
        })
    })
  }
  
  getArray(){
    return new Promise(resolve => {
      this.http.get<any>(this.apiUrl + 'array',{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
      })
      .subscribe(data => {
        this.array = data;
        resolve(data)
      err => {
        console.log(err)
      }})
    })
  }

  
}

