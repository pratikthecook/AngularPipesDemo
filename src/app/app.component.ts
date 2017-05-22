import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
    <h2>Pipe Example</h2>
    <h4>1. Today is {{today}}</h4>
    <h4>2. Today is {{today | date}}</h4>
    <h4>3. Today is {{today | date:"dd/MM/yyyy"}}</h4>
  `
})
export class AppComponent {
  today : Date;
  constructor(){
    this.today = new Date();
  }
}
