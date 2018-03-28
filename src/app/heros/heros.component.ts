import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heros';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  //引入数据类
  heroes:Hero[];
  //定义点击事件
  selectedHero:Hero;
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
    // alert(this.selectedHero.name);
    
  }


  

  //注入依赖，在constructor中注入，就可以在类中使用这个属性了
  constructor(private heroService:HeroService) {
     
   }

   getHeroes():void{
     this.heroes = this.heroService.getHeroes();
   }

  //生命周期函数
  ngOnInit() {
    this.getHeroes();
  }

}
