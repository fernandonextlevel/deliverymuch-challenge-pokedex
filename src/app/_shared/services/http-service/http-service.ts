//Angular
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Async
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

	private headers: HttpHeaders

	constructor
	(
		private sanitizer: DomSanitizer,
		private http: HttpClient,
	)
	{
		this.headers = new HttpHeaders({		
			"Access-Control-Allow-Origin": '*'
		})
	}

	public get<TypeGet>(url: string): Observable<TypeGet>
	{
		const _url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
		const _securityUrl: string = this.sanitizer.sanitize(5, _url) as string;
		return this.http.get<TypeGet>(_securityUrl, {headers: this.headers});
	}
}