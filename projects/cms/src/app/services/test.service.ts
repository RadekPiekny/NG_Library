import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  base: string = 'https://localhost:7007/'
  constructor(
    private http: HttpClient
  ) {}

  getCssClasses$(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}AllCSSClasses`)
  }
}
