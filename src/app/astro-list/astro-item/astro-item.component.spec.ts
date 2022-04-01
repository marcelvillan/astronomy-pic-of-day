import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroItemComponent } from './astro-item.component';

describe('AstroItemComponent', () => {
  let component: AstroItemComponent;
  let fixture: ComponentFixture<AstroItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
