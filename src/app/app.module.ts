import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CalculoComponent } from './calculo/calculo.component';
import { HeadComponent } from './head/head.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,   
    HeadComponent,
    CalculoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
