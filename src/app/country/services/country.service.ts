import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Object> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get(url);
  }
}
