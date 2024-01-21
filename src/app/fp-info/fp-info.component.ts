import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fp-info',
  templateUrl: './fp-info.component.html',
  styleUrls: ['./fp-info.component.scss']
})
export class FpInfoComponent {

  @Input() nom: string = '';
  @Input() desc: string = '';

}
