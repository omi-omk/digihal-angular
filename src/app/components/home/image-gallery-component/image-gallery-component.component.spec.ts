import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryComponentComponent } from './image-gallery-component.component';

describe('ImageGalleryComponentComponent', () => {
  let component: ImageGalleryComponentComponent;
  let fixture: ComponentFixture<ImageGalleryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGalleryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
