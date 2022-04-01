import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AstroService } from '../astro.service';
import { Astro } from '../shared/astro.model';

@Component({
  selector: 'app-astro-list',
  templateUrl: './astro-list.component.html',
  styleUrls: ['./astro-list.component.css'],
})
export class AstroListComponent implements OnInit {
  @Input() astros
  astro : Astro[]=[];
  showingDetail=false;
  astroDetail=this.astro[0]
  private astroSub: Subscription;
  constructor(private astroService: AstroService) {}

  ngOnInit(): void {
    this.astro=this.astros;

  }
  toggleDetail(itemDate?:Date){
    if(itemDate){
    this.astroDetail= this.astro.find(t=>{
      return t.date== itemDate;
    })}
    this.showingDetail=!this.showingDetail;
  }
}
