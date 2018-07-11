import { Component, OnInit } from '@angular/core';
import { HttpService, LoginCredentials } from '../services/http.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	formCreds: LoginCredentials = new LoginCredentials();

	constructor(
		public http: HttpService,
		private router: Router
	) { }

	ngOnInit() {
	}

	loginSubmit() {
		this.http
		.postLogin( this.formCreds )
		.then(() => {
			console.log( "Logged in successfully!" );
			this.router.navigateByUrl( "/admin" );
		})
		.catch(( err ) => {
			console.log( "Login error" );
			console.log( err );
		})
	}

}
