import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl = "http://localhost:3001/login"
  public autenticado = false;

  constructor(private http:HttpClient) {}

  login(nome: string, senha: string): Observable<any> {
    return this.http.post(this.apiUrl, {nome, senha});
  }

  setAutenticado(status:boolean) {
    this.autenticado = status;
  }

  isLoggedIn(): boolean {
    return this.autenticado
  }

}
