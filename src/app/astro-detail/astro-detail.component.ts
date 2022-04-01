import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Astro } from '../shared/astro.model';

@Component({
  selector: 'app-astro-detail',
  templateUrl: './astro-detail.component.html',
  styleUrls: ['./astro-detail.component.css']
})
export class AstroDetailComponent implements OnInit {
@Input() astroInput:Astro;
@Output() closeButton = new EventEmitter<string>();
astroItem:Astro;
  constructor() {
  }

  ngOnInit(): void {
this.astroItem=this.astroInput;
  }
  closeDetail(){
this.closeButton.emit();
  }


}
