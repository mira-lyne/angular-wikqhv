import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  constructor( private httpClient: HttpClient) {}

  //méthode servant à verifier l'identité d'un utilisateur souhaitant se connecter
 login(mail: string, password: string): any {
   console.log( mail + password );
   const httpOption = { 
     headers: new HttpHeaders({"Content-Type": "application/json"}),
      };
   return;
 }
}