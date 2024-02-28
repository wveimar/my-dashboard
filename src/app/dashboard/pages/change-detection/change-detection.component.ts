import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="Change Detection" />
    <pre> {{ frameworkasProperty | json }}</pre>
    <pre> {{ frameworkasSignal | json }}</pre>
    <h3 class="bg-black">{{ frameworkasProperty | json }}</h3>
  `,
  styles: ``,
})
export default class ChangeDetectionComponent {

public currentFramework = computed

  public frameworkasSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkasProperty = signal({
    name: 'React',
    releaseDate: 2019,
  });

  constructor() {
    setTimeout(() => {
      console.log('hola change detection');
      console.log(this.frameworkasProperty);
    }, 3000);
  }
}
