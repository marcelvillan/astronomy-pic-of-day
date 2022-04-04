import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AstroService } from '../astro.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private astrosLoaded: Subscription;

  astros = [];
  date = new Date();
  constructor(
    private astroService: AstroService,
    private dataStorageService:DataStorageService
  ) {}

  ngOnInit(): void {

    this.astrosLoaded = this.astroService.astrosSub.subscribe((astros) => {
      this.astros = this.astroService.getAstros();

      this.astroService.orderAstrosDesc();
    });
    for(let i = 0; i<6; i++){

      this.dataStorageService.getAstro(this.date);
      this.date.setDate(this.date.getDate() - 1);
      this.astros = this.astroService.astros.slice();
    }



  }
}
