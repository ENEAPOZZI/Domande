import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { domanda, Token, risposta } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DomandeServiceService {


  constructor(private http: HttpClient) {
  this.getToken().subscribe(token => {

    if(token){

      localStorage.setItem('token',token.token);
      console.log('Token ricevuto:', token.token);
    }
  });
  }

 urlToken : string = 'https://opentdb.com/api_token.php?command=request'

  getToken():Observable<Token>{
    return this.http.get<Token>(this.urlToken)
  }

  StoricoSubject = new BehaviorSubject<{ giuste: number; sbagliate: number }[]>([]);

  StoricoSubject$ = this.StoricoSubject.asObservable()


  baseUrlDomande: string = 'https://opentdb.com/api.php'


  getDomande(amount:string,difficulty:string ):Observable<risposta>{
   return this.http.get<risposta>(`${this.baseUrlDomande}?amount=${amount}&type=boolean&difficulty=${difficulty}`)
  }

  aggiungiStorico(giuste: number, sbagliate: number) {
    const attuali = this.StoricoSubject.value;
    const nuovo = { giuste, sbagliate };
    const aggiornato = [...attuali, nuovo];
    this.StoricoSubject.next(aggiornato);
  }


}



