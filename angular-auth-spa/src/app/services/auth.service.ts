import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'
import { Router } from '@angular/router';
import { AltertifyService } from './altertify.service';
import { RegisterUser } from '../models/registerUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient:HttpClient , private router:Router,private alertifyService:AltertifyService) { }
path = "https://localhost:44371/api/auth/";
userToken:any;
decodedToken:any;                     //Tokeni decode etmek için angular2-jwt library
jwtHelper:JwtHelper = new JwtHelper();
TOKEN_KEY="token";
login(loginUser:LoginUser){
  let headers = new HttpHeaders();
  headers = headers.append("Content-Type","application/json");

  this.httpClient.post(this.path+"login",loginUser,{headers:headers}).subscribe(data=>{
    this.saveToken(data);
    this.userToken = data;
    this.decodedToken = this.jwtHelper.decodeToken(data.toString());
    this.alertifyService.success("Sisteme Giris Yapıldı.");         // Success Login Alert
    this.router.navigateByUrl("/hobbies");               // route the home page after login
  });

}



  saveToken(token){  // Tokeni local storagede tutmak.
    localStorage.setItem(this.TOKEN_KEY,token);
  }

  logOut(){

    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.error("Sisteme Giris Yapıldı."); 
  }

  loggedIn(){

    return tokenNotExpired(this.TOKEN_KEY);
  }

  get token(){    // PROPERTY

    return localStorage.getItem(this.TOKEN_KEY);


  }
  getCurrentUserId(){

    return this.jwtHelper.decodeToken(this.token).nameid
  }



  register(registerUser:RegisterUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type","application/json");

    this.httpClient.post(this.path+"register",registerUser,{headers:headers}).subscribe(data=>{
      //

    });

  }







}
