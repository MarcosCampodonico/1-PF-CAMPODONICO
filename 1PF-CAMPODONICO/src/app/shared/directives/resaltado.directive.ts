import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective implements OnChanges {

  @Input()
  appResaltado = 'red';
  appExpand = '20px';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {} //renderer se utiliza para manipular el estilo

  ngOnChanges(changes: SimpleChanges): void {
    this.ColorDeFondo();
  }

  ColorDeFondo(): void {
    this.renderer2.setStyle( //sirve para cambiar el estilo del elemento
      this.elementRef.nativeElement,
      'color',
      this.appResaltado //valor que le voy a dar
    );
     
  }
  ExpansionDeLetra(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'font-size',
      this.appExpand
    
    );
  }
}
