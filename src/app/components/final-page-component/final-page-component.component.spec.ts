import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPageComponentComponent } from './final-page-component.component';

describe('FinalPageComponentComponent', () => {
  let component: FinalPageComponentComponent;
  let fixture: ComponentFixture<FinalPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
