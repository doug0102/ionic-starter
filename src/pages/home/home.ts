import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	

	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
		
		this.isLoading = false;
		
		if(this.isAuthenticated() === false) {
			this.showLogin();
		}
	}
	
	isAuthenticated() {
		return false;
	}
	
	showLogin() {
		const prompt = this.alertCtrl.create({
			title: 'Login',
			inputs: [
				{
					name: 'Username',
					placeholder: 'Username'
				},
				{
					name: 'Password',
					placeholder: 'Password'
				}
			],
			buttons: [
				{
					text: 'Login',
					handler: data => {
						console.log('Login clicked');
						this.showLoading();
					}
				}
			]
		});
		
		prompt.onDidDismiss(() => {
			if(this.isLoading === false && this.isAuthenticated() === false) {
				this.showLogin();
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
			
			if (this.isAuthenticated() === false) {
				this.showLogin();
			}
		});
		
		loading.present();
	}
}