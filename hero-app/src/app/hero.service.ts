import { Injectable } from '@angular/core';
import { Hero } from '../app/hero';
import { HEROES } from '../app/mock-heros';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/Operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../app/message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';
  constructor(private messageService: MessageService, private http: HttpClient) { }
  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched Hero Service');
    return this.http.get<Hero[]>(this.heroUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeros', [])));
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  private log() {
    this.messageService.add(`HeroService: ${Message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error);


      //this.log(`${operation} failed: ${error.message}`);


      return of(result as T);
    };
  }
}
