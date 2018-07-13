import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tab = [true, false, false];

  setTabStatus(t: number) {
    this.tab = [false, false, false];
    this.tab[t] = true;
  }
}
