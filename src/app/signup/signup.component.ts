import { Component, OnInit } from '@angular/core';
import { SignupCredentials, HttpService } from "../services/http.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	formCreds: SignupCredentials = new SignupCredentials();

	constructor(
		public http: HttpService,
		private router: Router
	) { }

	ngOnInit() {}

	signupSubmit() {
		this.http
		.postSignup( this.formCreds )
		.then(() => {
			console.log( "Signed in successfully!" );
			this.router.navigateByUrl( "/admin" );
		})
		.catch(( err ) => {
			console.log( "signup error" );
			console.log( err );
		})
	}

}
