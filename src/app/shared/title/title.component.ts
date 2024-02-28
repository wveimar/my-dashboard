import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-3xl my-5 text-center">{{title}}-{{withShadow}}</h1>`,
  styles: ``,
})
export class TitleComponent {
  
  @Input ({required: true}) title! : string ;
  @Input ({transform: booleanAttribute}) withShadow : boolean = false;

}
