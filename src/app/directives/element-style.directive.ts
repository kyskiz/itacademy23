import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElementStyle]'
})
export class ElementStyleDirective {
  colors = ['red', 'blue', 'green', 'yellow'];

  constructor(private el: ElementRef) {
    this.changeColor();
  }

  changeColor() {
      const colorIndex = Math.floor(Math.random() * this.colors.length);
      const color = this.colors[colorIndex];
      const background = this.colors[Math.floor(Math.random() * this.colors.splice(colorIndex,1).length)];
      this.el.nativeElement.style.color = color;
      this.el.nativeElement.style.backgroundColor = background;
  }

}
