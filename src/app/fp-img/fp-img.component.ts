import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fp-img',
  templateUrl: './fp-img.component.html',
  styleUrls: ['./fp-img.component.scss']
})
export class FpImgComponent {

  @Input() image: string = "";

}
