import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../_model/users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseURL = "http://localhost:8080/register";

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http: HttpClient) { }

  registerUser(user: Users): Observable<Object> {
    return this.http.post(this.baseURL, user, { headers: this.requestHeader });
  }
}
