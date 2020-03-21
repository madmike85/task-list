import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightRed]',
})
export class HighlightRedDirective {
  @Input('appHighlightRed') public date: string;
  @Input('completed') public completed: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    const deadlineDate: number = Date.parse(this.date);
    const currentDate: number = Date.now();

    if (currentDate > deadlineDate && !this.completed) {
      this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    }
  }
}
