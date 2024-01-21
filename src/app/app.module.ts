import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { FpImgComponent } from './fp-img/fp-img.component';
import { FpInfoComponent } from './fp-info/fp-info.component';
import { FpPrixComponent } from './fp-prix/fp-prix.component';
import { FpDetailBtnComponent } from './fp-detail-btn/fp-detail-btn.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { Page1Component } from './page1/page1.component';
import { FpNomComponent } from './fp-nom/fp-nom.component';
import { FpDescComponent } from './fp-desc/fp-desc.component';
import { FormulaireProduitComponent } from './formulaire-produit/formulaire-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    FicheProduitComponent,
    FpImgComponent,
    FpInfoComponent,
    FpPrixComponent,
    FpDetailBtnComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    Page1Component,
    FpNomComponent,
    FpDescComponent,
    FormulaireProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
