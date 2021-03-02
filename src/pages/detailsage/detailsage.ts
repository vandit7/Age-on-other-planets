import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as html2canvas from 'html2canvas'
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery';

/**
 * Generated class for the DetailsagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailsage',
  templateUrl: 'detailsage.html',
})
export class DetailsagePage {

  fullname: any
  bdate: Date;
  age: any;
  planetsarray: any = [];
  localdate: any;
  earthDay: any;

  marcuryYear: any;
  venusYear: any;
  earthYear: any;
  marsYear: any;
  jupiterYear: any;
  saturnYear: any;
  uranusYear: any;
  neptuneYear: any;
  plutoYear: any;


  marcuryday: any;
  venusday: any;
  earthday: any;
  marsday: any;
  jupiterday: any;
  saturnday: any;
  uranusday: any;
  neptuneday: any;
  plutoday: any;
  earthDayy: any;
  base64DataImage: string = ''; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    private base64ToGallery: Base64ToGallery) {
    this.fullname = localStorage.getItem("fname");
    this.localdate = localStorage.getItem("bdate");
  }

  ionViewDidLoad() {
    let date = new Date(this.localdate);
    if (date != undefined) {
      var todayDate = new Date();
      var ageyear = todayDate.getFullYear() - date.getFullYear();
      var agemonth = todayDate.getMonth() - date.getMonth();
      var ageday = todayDate.getDate() - date.getDate();
      if (agemonth <= 0) {
        ageyear--;
        agemonth = (12 + agemonth);
      }
      // if (todayDate.getDate() < date.getDate()) {
      //   agemonth--;
      //   ageday = 30 + ageday;
      // }  if (agemonth == 12) {
      //   ageyear = ageyear + 1;
      //   agemonth = 0;
      // }
      this.earthDayy = ageyear;
      this.earthDay = ageyear * 365;
      // alert("Age in Year:" + ageyear + ',' + 'Month:' + agemonth + ',' + 'Day:' + ageday);
      //console.log("Age in Year:" + ageyear + ',' + 'Month:' + agemonth + ',' + 'Day:' + ageday)
    }
    this.marcuryYear = (parseInt(this.earthDay) / 87.97).toFixed(1);
    this.venusYear = (parseInt(this.earthDay) / 224.70).toFixed(1);
    this.earthYear = (parseInt(this.earthDayy)).toFixed(1);
    this.marsYear = (parseInt(this.earthDay) / 687).toFixed(1);
    this.jupiterYear = (parseInt(this.earthDay) / (11.80 * 365)).toFixed(1);
    this.saturnYear = (parseInt(this.earthDay) / (29.4 * 365)).toFixed(1);
    this.uranusYear = (parseInt(this.earthDay) / (84 * 365)).toFixed(1);
    this.neptuneYear = (parseInt(this.earthDay) / (164 * 365)).toFixed(1);
    this.plutoYear = (parseInt(this.earthDay) / (248 * 365)).toFixed(1);

    this.marcuryday = (parseInt(this.earthDay) / 58.60).toFixed(1);
    this.venusday = (parseInt(this.earthDay) / 243).toFixed(1);
    this.earthday = (this.earthDay).toFixed(1);
    this.marsday = (parseInt(this.earthDay) / 1.03).toFixed(1);
    this.jupiterday = (parseInt(this.earthDay) / 0.41).toFixed(1);
    this.saturnday = (parseInt(this.earthDay) / 0.45).toFixed(1);
    this.uranusday = (parseInt(this.earthDay) / 0.72).toFixed(1);
    this.neptuneday = (parseInt(this.earthDay) / 0.67).toFixed(1);
    this.plutoday = (parseInt(this.earthDay) / 6.39).toFixed(1);
  }

  generateBase64_encode() {
    html2canvas(document.querySelector("#tablelist"), 
    { useCORS: true, imageTimeout: 500000, logging: true }).then(
      canvas => {
        this.base64DataImage = canvas.toDataURL("image/png");
        this.createBase64ToGallery();
      },
      err => {
        console.log('Error image:', err)
      });
  }
  createBase64ToGallery() {
    let options: Base64ToGalleryOptions = {
      prefix: '_img',
      mediaScanner: true
    };
    this.base64ToGallery
      .base64ToGallery(this.base64DataImage, options).then(
        res => {
          let alert = this.alertCtrl.create({
            title: 'Success Alert!',
            subTitle: 'Successfully Save Image',
            buttons: ['OK']
          });
          alert.present();
          console.log('Saved image to gallery:', res)
        },
        err => {
          let alert = this.alertCtrl.create({
            title: 'Alert!',
            subTitle: 'Please Give the Storage Permissions',
            buttons: ['OK']
          });
          alert.present();

          console.log('Error saving image to gallery:', err)
        }
      );
  }
}
