import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { domanda } from '../../Interfaces/interfaces';
import { DomandeServiceService } from '../../Service/domande-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private domandeSvc:DomandeServiceService){}

  currentIndex: number = 0;
  MaxIndex: number = 0;
  showResult: boolean = false;

  domande!: domanda[];
  domandeGiuste: domanda[] = [];
  domandeSbagliate: domanda[] = [];

  formErrorMessage: string | null = null;

  riceviMessaggioErrore(messaggio: string | null) {
    this.formErrorMessage = messaggio;

    if (messaggio) {
      setTimeout(() => {
        this.formErrorMessage = null;
      }, 2000);
    }
  }

  riceviDomande(domandeRicevute: domanda[]) {
    this.domande = domandeRicevute;
    this.MaxIndex = this.domande.length;
    this.currentIndex = 0;
    this.showResult = false;
    this.domandeGiuste = [];
    this.domandeSbagliate = [];
  }

  rispondi(risposta: string, domanda: domanda) {
    if (!domanda || !domanda.correct_answer) return;

    if (risposta === domanda.correct_answer) {
      this.domandeGiuste.push(domanda);
    } else {
      this.domandeSbagliate.push(domanda);
    }

    this.currentIndex++;

    if (this.currentIndex >= this.MaxIndex) {
      this.showResult = true;

      this.domandeSvc.aggiungiStorico(
      this.domandeGiuste.length,
      this.domandeSbagliate.length
    )
    }
  }

  reset() {
    this.domande = [];
    this.currentIndex = 0;
    this.MaxIndex = 0;
    this.showResult = false;
    this.domandeGiuste = [];
    this.domandeSbagliate = [];
  }

}
