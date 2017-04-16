import { 
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  DoCheck,
  AfterViewInit,
  OnChanges,
  Output, 
  EventEmitter
} from '@angular/core';

import { animate, trigger, state, transition, style } from '@angular/animations';

import { GrabNasaService } from '../grab-nasa.service';

@Component({
  selector: 'bm-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
  animations: [
    trigger("loading", [
      state("loaded", style({
        transform: "scale(1)"
      })),
      state("notLoaded", style({
        transform: "scale(0.5)"
      })),
      transition('notLoaded => loaded', animate(500))
    ])
  ]
})
export class ImagesComponent implements OnInit, AfterContentInit, AfterViewInit, AfterContentChecked, DoCheck, OnChanges{
  constructor(private grabNasa: GrabNasaService) { }

  ngOnInit() {
    this.loadAllData();
    console.log("first init");
  } 
  ngAfterContentChecked() {
    console.log("ng after content checked");
  }
  ngDoCheck() {
    console.log("ng do check");
  }
  ngAfterViewInit() {
    console.log("ng after view init");
  }
  ngAfterContentInit() {
    console.log("ng after content init");
  }
  ngOnChanges() {
    console.log("ng on changes");
  }
  ngAfterViewChecked() {
    console.log("ng after view checked");
  }
  
  @Output() sendData = new EventEmitter;
  imageInfo: Object[] = [];
  activeImage: number = 0;
  activeImageUrl = "";
  loaded = 'notLoaded';
  clicked: boolean = false;
  size: string = "regular";
  rotation: number = 0;

  getRotation() {
    this.rotation += 90;
  }
  loadNextImage() {
    this.loaded = 'loaded';
    if(this.activeImage < this.imageInfo.length - 1) {
      this.activeImageUrl = this.imageInfo[this.activeImage][1]
      this.sendData.emit(this.imageInfo[this.activeImage]);
      this.activeImage += 1;
    }
    else {
      this.activeImageUrl = this.imageInfo[this.activeImage][1]
      this.sendData.emit(this.imageInfo[this.activeImage]);
      this.activeImage = 0;
    }
  }
  reset() {
    this.rotation = 0;
    this.clicked = false;
  }
  loadAllData() {
    this.grabNasa.getData()
    .subscribe(
      (response) => {
        const data = response.json();
        for(let ob of data) {
          this.imageInfo.push([ob, this.getImageUrlFromBlueMarbleObject(ob, "natural", "png")]);
        }
      console.log(this.imageInfo);
      }
    )
  }

  getImageUrlFromBlueMarbleObject(data, collection: string, format: string) {
    var date = data['date'];
    var year = date.split('-')[0];
    var month = date.split('-')[1];
    var day = date.split('-')[2].slice(0,2);
    var imgName = data['image'];
    return "https://epic.gsfc.nasa.gov/archive/" + collection + "/" + year + "/" + month + "/" + day + "/" + format + "/" + imgName + "." + format;
  }
}
