import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fp-detail-btn',
  templateUrl: './fp-detail-btn.component.html',
  styleUrls: ['./fp-detail-btn.component.scss']
})
export class FpDetailBtnComponent {

  @Input() lien?: string = "Lien Détails";

}
