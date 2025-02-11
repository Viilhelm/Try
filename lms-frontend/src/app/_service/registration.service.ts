import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../_model/users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  private baseURL = "http://localhost:8080/register";

  constructor(private httpClient: HttpClient) { }

  registerUser(user: Users): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }
}
