import { Component } from '@angular/core';

import {AuthService} from './authservice';
import { RedditsPage } from '../reddits/reddits';
import { SignupPage } from '../signup/signup';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usercreds;
  constructor(public navCtrl: NavController, public authservice : AuthService) {
 		this.usercreds = {
            name: '',
            password: ''
        }

    }

    login(user) {
        this.authservice.authenticate(user).then(data => {
            if(data) {
                this.navCtrl.setRoot(RedditsPage);
	            }
	    });
	}
    signup() {
        this.navCtrl.push(SignupPage);
    }

}
