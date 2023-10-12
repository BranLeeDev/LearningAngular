import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

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
