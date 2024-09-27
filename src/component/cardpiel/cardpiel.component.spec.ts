import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpielComponent } from './cardpiel.component';

describe('CardpielComponent', () => {
  let component: CardpielComponent;
  let fixture: ComponentFixture<CardpielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardpielComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardpielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
