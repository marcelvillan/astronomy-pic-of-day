import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Astro } from './astro.model';
import { AstroService } from '../astro.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private astroService: AstroService) {}
  getAstro(date: Date) {
    let formattedDate = date.toISOString().slice(0, 10);
    return this.http
      .get<Astro>(
        'https://api.nasa.gov/planetary/apod?api_key=sYjgHAJtT8z1koPpOZCuRgqk0vwhuV3qyvzhceod&date=' +
          formattedDate
      )
      .subscribe((astro) => {
        this.astroService.addAstro(astro);
      });
  }
}
