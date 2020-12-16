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

	public getTxt(url: string): Observable<string>
	{
		const _url: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
		const _securityUrl: string = this.sanitizer.sanitize(5, _url) as string;
		return this.http.get(_securityUrl, {headers: this.headers, responseType: 'text'});
	}

	public post<TypeSend, TypeReturn>(url: string, data: TypeSend): Observable<TypeReturn>
	{
		const _url: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
		const _securityUrl: string = this.sanitizer.sanitize(4, _url) as string;
		return this.http.post<TypeReturn>(_securityUrl, data, {headers: this.headers});
	}

	public postTxt<TypeReturn>(url: string): Observable<TypeReturn>
	{
		const _url: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
		const _securityUrl: string = this.sanitizer.sanitize(4, _url) as string;
		return this.http.post<TypeReturn>(_securityUrl, {headers: this.headers});
	}	
  
	public put<TypeSend>(url: string, data: TypeSend): Observable<boolean>
	{
		const _url: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
		const _securityUrl: string = this.sanitizer.sanitize(4, _url) as string;
		return this.http.put<boolean>(_securityUrl, data, {headers: this.headers});
	}

	public delete(url: string): Observable<void>
	{
		const _url: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
		const _securityUrl: string = this.sanitizer.sanitize(4, _url) as string;
		return this.http.delete<void>(_securityUrl, {headers: this.headers});
	}
  
}