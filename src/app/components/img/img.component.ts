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
  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('Hare esto porque cambio la imagen', newImg);
  }

  @Output() loaded = new EventEmitter<string>();

  createdNewInput: string = '';

  counter: number = 0;
  counterFn: number | undefined;

  constructor() {
    // before render
    // No async -- once time
    console.log('Constructor', 'Image value is', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before render
    // changes inputs -- times
    console.log('ngOnChanges', 'Image value is', this.img);
    // Escuchar todos los cambios de todos los inputs
    console.log('changes', changes);
    // Escuchar un input en específico cuando cambié
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
    window.clearInterval(this.counterFn);
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
