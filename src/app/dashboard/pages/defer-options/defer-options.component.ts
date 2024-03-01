import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HevyLoadersFastComponent } from '@shared/hevy-loaders-slow/hevy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,HevyLoadersFastComponent,TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
