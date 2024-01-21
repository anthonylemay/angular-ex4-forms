import { Component, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.scss']
})
export class FicheProduitComponent {

  @Input() produit: Produit = {
    nom: "",
    description: "",
    prix:0,
    lien: "",
    url_image: ""
  };
  


}

