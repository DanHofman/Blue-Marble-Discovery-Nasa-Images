import { Component, Input } from '@angular/core';

@Component({
  selector: 'BM-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeInfo;
  loadInfo(active){
    this.activeInfo= active;
  }
}
