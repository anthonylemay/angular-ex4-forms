import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fp-nom',
  templateUrl: './fp-nom.component.html',
  styleUrls: ['./fp-nom.component.scss']
})
export class FpNomComponent {

  @Input() nom: string = "Nom du Produit";
}
