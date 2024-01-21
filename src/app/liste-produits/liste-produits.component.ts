import { Component } from '@angular/core';
import { Produit } from '../produit';
import{ PRODUITS} from '../mock-produits';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent {
  
  produits: Produit[] = PRODUITS;

}
