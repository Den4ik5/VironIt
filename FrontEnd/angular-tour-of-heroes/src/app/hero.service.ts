import {Injectable} from '@angular/core';

import {MessagesService} from "./messages.service";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched hero id =${id}');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessagesService) {
  }
}
