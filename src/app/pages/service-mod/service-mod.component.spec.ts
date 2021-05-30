import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModComponent } from './service-mod.component';

describe('ServiceModComponent', () => {
  let component: ServiceModComponent;
  let fixture: ComponentFixture<ServiceModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
