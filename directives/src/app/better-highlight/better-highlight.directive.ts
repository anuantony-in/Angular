import { Directive, OnInit, Renderer2,ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  // can set the selector itself as an alias
  // @Input('appBetterHighlight') highlightColor:string = 'blue';
  // <p [appBetterHighlight]="'red'" [defaultColor]="'yellow'">Style me with a better highlight directive</p>
  @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue')
  }

  @HostListener('mouseenter') mouseover(eventData:Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent')
    this.backgroundColor=this.defaultColor;
  }
}
