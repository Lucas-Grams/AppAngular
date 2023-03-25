import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkOnHouver]'
})
export class DarkOnHouverDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('mouseover')
  darkOn(){
    this.render.setStyle(this.el.nativeElement, 'filter','brightness(70%)');
  }

  @HostListener('mouseleave')
  darkOff(){
    this.render.setStyle(this.el.nativeElement, 'filter','brightness(100%)');
  }

}
