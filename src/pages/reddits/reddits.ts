import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from './../../app/services/reddit.service';
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  constructor(public navCtrl: NavController,private redditService:RedditService) {

  }
  ngOnInit(){
      console.log('onInit ran!')
  }
}
