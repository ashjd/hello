import { Component, OnInit } from '@angular/core';
import { LeapTrainerService } from './services/leapTrainer.service';
import { AppState } from '../app.service';
import { CreatePageState } from './createPageState.service';

@Component({
  selector: 'create',
  template: require('./create.component.html'), 
  styles: [require('./create.component.css')], 
  providers: [LeapTrainerService, AppState, CreatePageState]
})
export class Create implements OnInit {

  state = this.createPageState._state;

  constructor(private leapTrainerService: LeapTrainerService, private appState: AppState, private createPageState: CreatePageState) {
    this.leapTrainerService._initLeapTrainer();
  }

  setActiveGesture(gestureName) {
    return this.state.gestureName === gestureName ? 'primary' : null;
  }

  recordGesture(gestureName) {
    if (gestureName) {
      this.leapTrainerService.trainer.create(gestureName.toUpperCase());
    }
    //TODO: implement UI/X message for no input
  }

  testGesture(gestureName) {
    console.log('test')
  }

  saveGesture(gestureName) {
    console.log('save')
  }

  playback(gestureName) {
    // this.state.gestureName = gestureName;
    this.createPageState.set('gestureName', gestureName);
    this.createPageState.set('trainingComplete', true);
    //playback logic for gesture...playback plugin? 
  }

  update(gestureName) {
    // this.leapTrainerService.trainer.trainingGestures += 3;
    this.leapTrainerService.trainer.startTraining(gestureName, 3);
  }

  ngOnInit() {


  }

}