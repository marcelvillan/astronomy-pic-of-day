import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from './shared/data-storage.service';
import { Astro } from './shared/astro.model';
@Injectable()
export class AstroService implements OnInit {
  constructor() {}
  astros: Astro[] = [];
  astrosSub = new Subject<Astro[]>();
  ngOnInit(): void {}
  getAstros() {
    return this.astros;
  }
  addAstro(astro: Astro) {
    this.astros.push(astro);
    this.astrosSub.next(this.astros.slice());
  }
  orderAstrosDesc() {
   // this.astros.sort((a,b)=>a.date.valueOf()-b.date.valueOf());
   this.astros.sort(function(a,b): any{
    return (new Date(a.date)).getTime() - (new Date(b.date)).getTime();
});
this.astros.reverse();
  }
}
