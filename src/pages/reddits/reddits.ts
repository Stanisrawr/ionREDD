import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from './../../app/services/reddit.service';
import { DetailsPage } from './../details/details';
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items:any;
  category:any;
  limit:any;
  constructor(public navCtrl: NavController,private redditService:RedditService) {
    this.getDefaults();
  }
  ngOnInit(){
    this.getPosts(this.category,this.limit);
      console.log('onInit ran!')
  }
    viewItem(item){
        this.navCtrl.push(DetailsPage,{
          item:item
        });
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
    getPosts(category,limit){
      this.redditService.getPosts(category,limit).subscribe(response =>{
        this.items=response.data.children;
        console.log(response);
      });
    }
    changeCategory(){
      this.getPosts(this.category,this.limit);

    }
}
