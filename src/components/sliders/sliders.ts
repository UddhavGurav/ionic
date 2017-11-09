import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the SlidersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sliders',
  templateUrl: 'sliders.html'
})
export class SlidersComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello SlidersComponent Component');
    this.text = 'Hello World';
  }

  CheckLogin()  {
   this.navCtrl.setRoot(HomePage);
   // this.navCtrl.push(HomePage);
  }

}
