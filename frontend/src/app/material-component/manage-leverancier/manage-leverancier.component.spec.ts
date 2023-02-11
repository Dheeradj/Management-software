import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLeverancierComponent } from './manage-leverancier.component';

describe('ManageLeverancierComponent', () => {
  let component: ManageLeverancierComponent;
  let fixture: ComponentFixture<ManageLeverancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLeverancierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageLeverancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
