import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnInit,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  constructor() {
    // before render
    // No async -- once time
    console.log('Constructor', 'Image value is', this.img);
  }

  ngOnChanges(): void {
    // before render
    // changes inputs -- times
    console.log('ngOnChanges', 'Image value is', this.img);
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'Image value is', this.img);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
  }

  imageDefault =
    'https://static.platzi.com/media/user_upload/toy-a0d1c980-a8ce-4fa4-83d6-3b016999a162.jpg';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
