import { Component } from '@angular/core';
import { Icon, Color, Type } from '@gxan/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icon : Icon = {
    color: Color.blue,
    size: 24,
    type: Type.add
  }
}
