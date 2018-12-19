import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {
	
	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
		
		this.user = {
			userName: '',
			password: ''
		}
		
		this.login = function(user) {
			let loader = loadingCtrl.create({
				content: "Logging in...",
				duration: 3000
			});
			
			console.log(this.user);
			
			loader.present();
		}
		
	}
	
}
