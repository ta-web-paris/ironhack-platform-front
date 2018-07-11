import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs/operator/toPromise";
import { environment } from "../../environments/environment";

@Injectable()
export class HttpService {

	currentUser : Admin;

	constructor(
		private http : HttpClient
	) { }

	postLogin( creds: LoginCredentials ) {
		return this.http
		.post( `${ environment.backUrl }/admin/login`, creds, { withCredentials: true } )
		.toPromise()
		.then(( backEndResponse: any ) => {
			this.currentUser = backEndResponse.userInfo;
			return backEndResponse;
		});
	}
	
	postSignup( creds: SignupCredentials ) {
		return this.http
		.post( `${ environment.backUrl }/admin/process-signup`, creds, { withCredentials: true } )
		.toPromise()
		.then(( backEndResponse: any ) => {
			this.currentUser = backEndResponse.userInfo;
			return backEndResponse;
		});
	}

	postLogout() {
		return this.http
		.post( `${ environment.backUrl }/admin/logout`, { withCredentials: true } )
		.toPromise()
		.then(( backEndResponse: any ) => {
			this.currentUser = backEndResponse.userInfo;
			return backEndResponse;
		})
	}


	check() {
		return this.http
		.get( `${ environment.backUrl }/admin/loggedin`, { withCredentials: true } )
		.toPromise()
		.then(( backEndResponse: any ) => {
			this.currentUser = backEndResponse.userInfo;
			console.log( "BACK END RESPONSE" );
			console.log( backEndResponse );
			console.log( "CURRENT USER" );
			console.log( this.currentUser );
			return backEndResponse;
		});
	}

}

export class Admin {
	_id: string;
	username: string;
	email: string;
	pictureUrl: string;
	updated_at: Date;
	created_at: Date;
}

export class SignupCredentials {
	username: string;
	email: string;
	password: string;
}

export class LoginCredentials {
	email: string;
	password: string;
}