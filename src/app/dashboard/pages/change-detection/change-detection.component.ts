import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />
    <pre> {{ frameworkAsProperty | json }}</pre>
    <pre> {{ frameworkAsSignal | json }}</pre>
    <h3 class="bg-black">{{ frameworkAsProperty | json }}</h3>
  `,
  styles: ``,
})
export default class ChangeDetectionComponent {

public currentFramework = computed(
  () => `change detection -${this.frameworkAsSignal.name}`);

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = signal({
    name: 'React',
    releaseDate: 2019,
  });

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update(value => {value.name= 'Angular'
      return {...value}
      });
      console.log('hola change detection');
      console.log(this.frameworkAsProperty);
    }, 3000);
  }
}
