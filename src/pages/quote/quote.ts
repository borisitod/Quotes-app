import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  constructor (private viewCtrl: ViewController, private navParam: NavParams) {}

  ionViewDidLoad(){
    this.person = this.navParam.get('person');
    this.text = this.navParam.get('text');
  }

  onClose() {
    this.viewCtrl.dismiss();
  }

}
