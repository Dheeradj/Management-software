import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverancierComponent } from './leverancier.component';

describe('LeverancierComponent', () => {
  let component: LeverancierComponent;
  let fixture: ComponentFixture<LeverancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeverancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeverancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
