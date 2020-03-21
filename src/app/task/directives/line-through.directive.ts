import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLineThrough]',
})
export class LineThroughDirective {
  @Input('appLineThrough') public completed: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    if (this.completed) {
      this.renderer.setStyle(this.element.nativeElement, 'text-decoration', 'line-through');
    }
  }
}
