import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	constructor(
		public http: HttpService,
		private router: Router
	) {}

	logoutClick() {
		this.http.postLogout()
		.then(() => {
			this.router.navigateByUrl( "/" );
		})
		.catch(( err ) => {
			console.log( "Logout error" );
			console.log( err );
		});
	}
	
}
