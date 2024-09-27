import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquillajeComponent } from './maquillaje.component';

describe('MaquillajeComponent', () => {
  let component: MaquillajeComponent;
  let fixture: ComponentFixture<MaquillajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquillajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquillajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
