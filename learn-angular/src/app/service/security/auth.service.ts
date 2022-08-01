import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  private parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

  logIn(cred: any){
    return this.http.post('/api/authenticate', JSON.stringify(cred)).pipe(map(res=>{
      let result: any = res.json();
      if (result && result.token){
          localStorage.setItem('token', result.token);
          return true;
      }
      return false;
    }));
  }
  logOut(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token == null)
        return false;
    else 
      return true;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    let jsonPayload = this.parseJwt(token);
    return jsonPayload;
  }

  
}
