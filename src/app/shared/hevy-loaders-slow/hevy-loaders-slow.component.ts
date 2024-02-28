import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hevy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>hola HevyLoadersSlowComponent</h1>`,
  
})
export class HevyLoadersSlowComponent {

  constructor(){
    const start = Date.now();
    while (Date.now() - start < 3000) {};
    console.log("cagando...");
  }

}
