import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heros';

@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }


  constructor() { }

}
