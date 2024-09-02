import {Component, input, ViewEncapsulation, ElementRef, inject, contentChild} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>();
  private element = inject(ElementRef);
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  onClick() {
    console.log(this.element);
    console.log(this.control());
  }
}
