import { Injectable } from '@angular/core';
// import { Globalconstant } from './global-constant;  // Use the correct relative path
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  readonly rootURL = "https://localhost:7278/api";

  constructor(private http: HttpClient) { }

  SendUserEntrData(userName: string, topic: string, message: string, useremail: string) {
    return this.http.get(`${this.rootURL}/Email?username=${userName}&topic=${topic}&message=${message}&useremail=${useremail}`);
  }

}
