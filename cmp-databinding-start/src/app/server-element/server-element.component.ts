import { Component, OnInit,Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck ,
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  @Input('srvElement') element :{type:string,name:string,description:string};
  @Input () name:string;
  @ViewChild('heading',{static:true}) header:ElementRef;

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {   //This has a feature that can store the old value and also the new value. 
                                                // So in some situations if we want to store the old value and process it , this method can be used.
    console.log('ngOnchanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit is called');
    console.log(this.header.nativeElement.textContent)
  }

  ngDoCheck(): void {   //called all the tims, when angular checks for any changes.
    console.log('ngDoCheck is called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is called')
  }
}
 