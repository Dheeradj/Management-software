import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageKlantComponent } from './manage-klant.component';

describe('ManageKlantComponent', () => {
  let component: ManageKlantComponent;
  let fixture: ComponentFixture<ManageKlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageKlantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageKlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
