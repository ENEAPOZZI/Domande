import { Component, EventEmitter, Input, Output } from '@angular/core';
import { domanda } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-domanda',
  templateUrl: './domanda.component.html',
  styleUrl: './domanda.component.scss'
})
export class DomandaComponent {
 @Input() domanda!: domanda;
 @Input() currentIndex!: number;
 @Input() totale!: number;

 @Output() rispostaSelezionata = new EventEmitter<string>();

  rispondi(risposta: string) {
    this.rispostaSelezionata.emit(risposta);
  }
}
