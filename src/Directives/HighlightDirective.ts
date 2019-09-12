import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({ selector: '[highlight]' })

export class HighlightDirective {
	constructor(renderer: Renderer, e1: ElementRef) {
		renderer.setElementStyle(e1.nativeElement, 'backgroundColor', 'blue')
	}
}



