import { Component, OnChanges, OnInit, DoCheck,AfterContentInit ,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { TestServer } from './services/TestServer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit , DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  constructor(private testServer: TestServer){};
  title = 'Tour of Heros';
  test = 'test event bind';
  data = 'testdata';
  color = 'blue';
  width = '7px';
  bind = ' enter your name';

  data2: any;
  getInfo() {
  this.data2 = this.testServer.getContent().subscribe(res => {this.data2 = res});
  }
  buttoncheck() {
    this.test = 'changed!';
  }
  ngOnChanges(){
    console.log("parentOnchanges");
  }
  ngOnInit(){
    console.log("parentOnInt");
    this.getInfo();
  }
  ngDoCheck(){
    console.log("parentDocheck");
  }
  ngAfterContentInit(){
    console.log("parentAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("parentAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("parentAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("parentAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("parentOnDestroy");
  }
}

