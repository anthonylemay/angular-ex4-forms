import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fp-desc',
  templateUrl: './fp-desc.component.html',
  styleUrls: ['./fp-desc.component.scss']
})
export class FpDescComponent {

  @Input() desc: string = "Description du produit";

}
