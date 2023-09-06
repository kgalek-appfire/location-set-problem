import { Component } from '@angular/core';
import mondaySdk from 'monday-sdk-js';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="click1()">Click 1</button>
    <button (click)="click2()">Click 2</button>
  `,
})
export class AppComponent {

  monday: any = mondaySdk();

  click1(): void {
    // this.monday.set('location', { query: { appPath: 'box/ROOT/o/hierarchy' } });
    this.monday.set('location', { query: { appPath: 'box-ROOT-o-hierarchy' } });
  }

  click2(): void {
    // this.monday.set('location', { query: { appPath: 'box/ROOT/o/timeline' } });
    this.monday.set('location', { query: { appPath: 'box-ROOT-o-timeline' } });
  }

}
