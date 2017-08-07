import { RedditsPage } from './../reddits/reddits';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from './../details/details';
import { RedditService } from './../../app/services/reddit.service';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  category:any;
  limit:any;
  constructor(public navCtrl: NavController,private redditService:RedditService) {
    this.getDefaults();
  }

  setDefaults(){
    localStorage.setItem('category',this.category);
    localStorage.setItem('limit',this.limit);
    this.navCtrl.push(RedditsPage);
    
  }

   
     getDefaults(){
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'all';
    }

    if(localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }
  }
   
  

}
