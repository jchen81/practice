import { Component, OnChanges, OnInit, DoCheck,AfterContentInit ,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit , DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() binddata:string;
  ngOnChanges(){
    console.log("childOnchanges");
  }
  ngOnInit(){
    console.log("childOnInt");
  }
  ngDoCheck(){
    console.log("childDocheck");
  }
  ngAfterContentInit(){
    console.log("childAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("childAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("childAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("childAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("childOnDestroy");
  }
}