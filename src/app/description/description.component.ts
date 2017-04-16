import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'bm-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnChanges{
  @Input() activeImage: Object;
  caption: string;
  date: string;
  coordinates: string[];

  ngOnChanges() {
    this.caption = this.activeImage ?  this.activeImage['caption'] : "";
    this.date = this.activeImage ? this.activeImage['date'] : "";
    this.coordinates = this.activeImage ? [this.activeImage['dscovr_j2000_position']['x'].toString(), this.activeImage['dscovr_j2000_position']['y'].toString(), this.activeImage['dscovr_j2000_position']['z'].toString()] : [];
  }
} 
