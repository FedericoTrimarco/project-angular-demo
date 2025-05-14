import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridPageComponent } from './ag-grid-page.component';

describe('AgGridPageComponent', () => {
  let component: AgGridPageComponent;
  let fixture: ComponentFixture<AgGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
