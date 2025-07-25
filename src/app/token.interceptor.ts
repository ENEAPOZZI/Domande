import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token: string = localStorage.getItem('token') ?? '';
      const urlWithToken = `${request.url}&token=${token}`;


    const newRequest = request.clone({
      url: urlWithToken
    })

    console.log('richiesta completa',newRequest)
    return next.handle(newRequest);
  }
}
