import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
    RouterOutlet,
    UiModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
