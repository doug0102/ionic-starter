import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { User } from '../../view-models/User.ts';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	user: User;
	
	isLoading: bool;
	isAuthenticated: bool;

	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
		
		this.user = new User();
		
		this.isLoading = false;
		this.isAuthenticated = false;
		
		if (this.isAuthenticated === false) {
			this.showLogin();
		}
	}
	
	showLogin(message) {
		const prompt = this.alertCtrl.create({
			title: 'Login',
			message: message,
			inputs: [
				{
					name: 'username',
					type: 'string',
					placeholder: 'Username',
					value: this.user.name,
				},
				{
					name: 'password',
					type: 'password',
					placeholder: 'Password',
					value: this.user.password,
				}
			],
			buttons: [
				{
					text: 'Login',
					handler: data => {
						
						this.user.setName(data.username);
						this.user.setPassword(data.password);
						
						if (this.user.isValid()) {
							
							this.showLoading();
							this.user.authenticate();
						} 
						else {
							// returning false in the handler won't close the window
							return false;
						}
					}
				}
			]
		});
		
		prompt.onDidDismiss(() => {
			if (this.isLoading === false && this.user.isAuthenticated() === false) {
				this.showLogin('Please login to continue.');
			}
		});
		
		prompt.present();
	}
  
	showLoading() {
		
		this.isLoading = true;
		
		const loading = this.loadingCtrl.create({
			content: "Logging in...",
			duration: 3000
		});
		
		loading.onDidDismiss(() => {
			this.isLoading = false;
			
			if (this.user.isAuthenticated() === false) {
				this.showLogin('Please check your credentials.');
			}
		});
		
		loading.present();
	}
}