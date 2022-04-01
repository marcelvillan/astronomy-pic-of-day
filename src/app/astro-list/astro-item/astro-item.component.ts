import { Component, Input, OnInit } from '@angular/core';
import { AstroService } from 'src/app/astro.service';
import { Astro } from 'src/app/shared/astro.model';

@Component({
  selector: 'app-astro-item',
  templateUrl: './astro-item.component.html',
  styleUrls: ['./astro-item.component.css'],
})
export class AstroItemComponent implements OnInit {
  @Input() astroInput : Astro;
  astroItem:Astro;

  constructor(private astroService: AstroService) {}

  ngOnInit(): void {
    //this.astroItem= this.astroService.getAstros();

    this.astroItem = this.astroInput;
  }
}
