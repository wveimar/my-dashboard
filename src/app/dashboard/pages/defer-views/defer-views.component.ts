import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HevyLoadersSlowComponent } from '@shared/hevy-loaders-slow/hevy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [CommonModule,HevyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
