import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-risultati',
  templateUrl: './risultati.component.html',
  styleUrl: './risultati.component.scss'
})
export class RisultatiComponent {
  @Input() domandeGiuste: any[] = [];
  @Input() domandeSbagliate: any[] = [];
  @Output() resetEvent = new EventEmitter<void>();

  onReset() {
    this.resetEvent.emit();
  }
}
