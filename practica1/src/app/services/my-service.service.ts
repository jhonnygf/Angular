import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private apiKey = '9f0456a7ae9e1d27ffe795df79591494'; // Coloca aquí tu clave API de OpenWeatherMap
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

  constructor(private http: HttpClient) { }

// Método para obtener el clima por ciudad
getWeatherByCity(city: string): Observable<any> {
  const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
  return this.http.get(url);
}


}



