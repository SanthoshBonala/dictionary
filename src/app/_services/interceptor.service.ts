import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {
      "app_id": environment.app_id,
      "app_key": environment.app_key
    }
    const modifiedreq = req.clone({ setHeaders: headers })
    return next.handle(modifiedreq)
    .pipe(
      map(event => {
          if(event instanceof HttpResponse){
            return event.clone({ body: event.body.results[0].lexicalEntries[0].entries[0].senses[0].synonyms })
          }
          return event;
      })
    )
  }

}
