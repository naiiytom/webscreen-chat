import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { ElementModule } from './element.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { SafeHtmlPipe } from './pipes/safeHtml.pipe'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ElementModule, HttpClientModule],
  declarations: [AppComponent, SafeHtmlPipe],
  providers: [SafeHtmlPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
