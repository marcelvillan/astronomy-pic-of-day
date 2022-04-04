import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Astro } from '../shared/astro.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-astro-detail',
  templateUrl: './astro-detail.component.html',
  styleUrls: ['./astro-detail.component.css']
})
export class AstroDetailComponent implements OnInit {
@Input() astroInput:Astro;
@Output() closeButton = new EventEmitter<string>();
@HostListener('window:resize', ['$event'])
safeURL:any;
screenHeight: number;
screenWidth: number;
astroItem:Astro;
  constructor(private _sanitizer: DomSanitizer) {


    this.getScreenSize();
  }

  ngOnInit(): void {
this.astroItem=this.astroInput;
this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.astroItem.url);
  }
  closeDetail(){
this.closeButton.emit();
  }
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
 }
 getScreenSize(event?) {
  this.screenHeight = window.innerHeight;
  this.screenWidth = window.innerWidth;
  console.log(this.screenHeight, this.screenWidth);
}


}
