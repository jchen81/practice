import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from 'src/Directives/HighlightDirective';
import { Component,OnChanges,OnInit,DoCheck, AfterContentInit ,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from "@angular/core";
import { TestServer } from './services/TestServer';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TestServer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
