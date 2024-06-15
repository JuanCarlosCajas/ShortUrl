import { Component } from '@angular/core';
import { UrlShortnerService } from '../../services/url-shortner.service';

@Component({
  selector: 'app-shorturl',
  templateUrl: './shorturl.component.html',
  styleUrl: './shorturl.component.css'
})
export class ShorturlComponent {
  public nombreUrl : string = "";
  public urlShort: string = "";
  public urlProcesada: boolean = false;

  constructor(private urlShortService : UrlShortnerService){}

  procesarUrl(): void{
    this.urlShortService.obtenerShortUrl(this.nombreUrl).subscribe(res => {
      if(res == null){
        alert("La url que envió no es la correcta");
        this.nombreUrl = '';
      }
      else{
        this.urlProcesada = true;
        this.urlShort = res.shorturl;
      }
    }, err => {
      console.log(err);
    }); 
    
  }
}
