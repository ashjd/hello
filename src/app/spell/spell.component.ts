import { Component, OnInit } from '@angular/core';
import { WordsService } from './wordsService.service';

@Component({
  selector: 'spell',
  template: require('./spell.component.html'),
  styles: [require('./spell.component.css')],
  providers: [WordsService]
})
export class Spell implements OnInit {

  private spellingWord:string = '';

  constructor( private wordsService: WordsService) {}

  ngOnInit() {
    this.spellingWord = this.wordsService.returnRandomWord();
  }

}
