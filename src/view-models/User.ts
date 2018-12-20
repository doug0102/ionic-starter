export class User {
	
	name: string;
	password: string;
	authenticated: bool;
	
	constructor() {
		this.name = null;
		this.password = null;
		this.authenticated = false;
	}
	
	constructor(name, password) {
		this.name = name;
		this.password = password;
		
		this.authenticate();
	}
	
	setName(name) {
		this.name = name;
	}
	
	getName() {
		return this.name;
	}
	
	setPassword(password) {
		this.password = password;
	}
	
	getPassword() {
		return this.password;
	}
	
	isValid() {
		return (this.name != null && this.name != "") &&
			   (this.password != null && this.password != "");
	}
	
	authenticate() {
		if(this.isValid()) {
			this.authenticated = true;
		} 
		else {
			this.authenticated = false;
		}
	}
	
	isAuthenticated() {
		return this.authenticated;
	}
}