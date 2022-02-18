//import './polyfills';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import{DragDropModule}from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { ProductDataService } from './services/product-data.service';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { AboutUsComponentComponent } from './components/home/about-us-component/about-us-component.component';
import { ImageGalleryComponentComponent } from './components/home/image-gallery-component/image-gallery-component.component';
import { ImageSliderComponentComponent } from './components/home/image-slider-component/image-slider-component.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { FinalPageComponentComponent } from './components/final-page-component/final-page-component.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    AboutUsComponentComponent,
    ImageGalleryComponentComponent,
    ImageSliderComponentComponent,
    HomePageComponentComponent,
    FinalPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
