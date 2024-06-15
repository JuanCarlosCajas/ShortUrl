import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortnerService {
  serviceUrl : string = 'http://localhost:8080/url/shortner';
  constructor(private http : HttpClient) { 

  }

  obtenerShortUrl(url : string){
    return this.http.post<any>(this.serviceUrl, url);
  }
}
