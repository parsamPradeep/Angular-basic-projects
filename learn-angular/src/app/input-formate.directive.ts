import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormate]'
})
export class InputFormateDirective {
  @Input() format: string;

  @HostListener('blur') OnBlur(){
    let value: string = this.el.nativeElement.value;
    if(this.format=='lowecase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
  }

  constructor(private el: ElementRef) {
    this.format='lowecase';
   }

}
