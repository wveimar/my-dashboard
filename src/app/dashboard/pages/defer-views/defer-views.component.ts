import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HevyLoadersSlowComponent } from '@shared/hevy-loaders-slow/hevy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,HevyLoadersSlowComponent,TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
