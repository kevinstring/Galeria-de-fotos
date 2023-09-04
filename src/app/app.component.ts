import { Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GaleriaDinamica';
  darkMode = signal<boolean>(false)
  @HostBinding("class.dark") get mode(){
    return this.darkMode();
  }
}
