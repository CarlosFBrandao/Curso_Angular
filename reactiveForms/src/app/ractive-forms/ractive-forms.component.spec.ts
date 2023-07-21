import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactiveFormsComponent } from './ractive-forms.component';

describe('RactiveFormsComponent', () => {
  let component: RactiveFormsComponent;
  let fixture: ComponentFixture<RactiveFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RactiveFormsComponent]
    });
    fixture = TestBed.createComponent(RactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
