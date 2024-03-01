import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hevy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full',cssClass]">
  <ng-content></ng-content>
  

  </section>`,
  
})
export class HevyLoadersFastComponent {
  @Input({required : true}) cssClass!: string

}
