import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QmenuConceptComponent } from './qmenu-concept/qmenu-concept.component';
import { CubixCabComponent } from './cubix-cab/cubix-cab.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    QmenuConceptComponent,
    CubixCabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule
  ],
  exports: [
    NavbarComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
