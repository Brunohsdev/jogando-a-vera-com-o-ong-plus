// Arquivo: register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private apiUrl = 'http://localhost:3000/register';

  constructor(private http: HttpClient) {}

  registerUser(doador: any): Observable<any> {
    return this.http.post(this.apiUrl, doador);
  }
}
