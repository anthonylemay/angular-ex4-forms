import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fp-prix',
  templateUrl: './fp-prix.component.html',
  styleUrls: ['./fp-prix.component.scss']
})
export class FpPrixComponent {

  @Input() prix?: number = 0;

}
