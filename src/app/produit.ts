export interface Produit {
    nom:string;
    description: string;
    prix?: number;
    lien: string;
    url_image?: string; // le ? permet de rendre ceci optionnel.
}

