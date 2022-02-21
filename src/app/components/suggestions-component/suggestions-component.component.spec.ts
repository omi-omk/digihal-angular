import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsComponentComponent } from './suggestions-component.component';

describe('SuggestionsComponentComponent', () => {
  let component: SuggestionsComponentComponent;
  let fixture: ComponentFixture<SuggestionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
