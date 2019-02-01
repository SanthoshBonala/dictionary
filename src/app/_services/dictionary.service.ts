import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  getSynonyms(word: string): Observable<any> {
    const url = this.getUrl(word);
    return this.http.get(url);
  }

  getUrl(word): string {
    return `/api/v1/entries/en/${word}/synonyms`
  }
  
}
