import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StartpagePage } from '../startpage/startpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
  startpage() {
    this.navCtrl.push(StartpagePage);
  }
}
