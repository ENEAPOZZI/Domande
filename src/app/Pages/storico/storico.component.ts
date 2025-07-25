import { Component } from '@angular/core';
import { DomandeServiceService } from '../../Service/domande-service.service';

@Component({
  selector: 'app-storico',
  templateUrl: './storico.component.html',
  styleUrl: './storico.component.scss'
})
export class StoricoComponent {
 storico: { giuste: number; sbagliate: number }[] = [];

  constructor(private risultatiSvc: DomandeServiceService) {}

  ngOnInit() {
    this.risultatiSvc.StoricoSubject$.subscribe(ris => {
      this.storico = ris;
    });
  }
}
