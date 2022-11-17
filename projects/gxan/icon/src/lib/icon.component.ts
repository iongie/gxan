import { Component, Input, OnInit } from '@angular/core';
import { iconConfig } from './icon.interface';

@Component({
  selector: 'gx-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() icon = {
    size: 0,
    color: "",
    type: ""
  }
  type= ""
  fill = ""
  color= ""
  constructor() { }

  ngOnInit(): void {
    const caterogies = iconConfig.filter((x) => {
      return x.name == this.icon.type
    })[0]
    this.type = caterogies.type
    this.color = caterogies.model == 'none' ? 'outline-'+this.icon.color: this.icon.color 
    this.fill = caterogies.model
  }

}
