import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DetailsagePage } from '../detailsage/detailsage';

/**
 * Generated class for the StartpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startpage',
  templateUrl: 'startpage.html',
})
export class StartpagePage {
  bdate: any;
  fullname: any;
  imageResponse: any;
  options: any;
  photos : any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartpagePage');
  }

  calculate() {
    if (this.fullname == undefined) {
      const alert = this.alertCtrl.create({
        subTitle: 'Please Enter a Full Name',
        buttons: ['OK']
      });
      alert.present();
    }
     else if (this.bdate == undefined) {
        const alert = this.alertCtrl.create({
          subTitle: 'Please Enter a Date Of Birth',
          buttons: ['OK']
        });
        alert.present();
    } else {
      localStorage.setItem("fname", this.fullname);
      localStorage.setItem("bdate", this.bdate);
      this.navCtrl.push(DetailsagePage);
    }
  }

  
}
