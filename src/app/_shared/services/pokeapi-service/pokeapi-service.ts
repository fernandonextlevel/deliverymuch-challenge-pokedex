//Angular
import { Injectable } from '@angular/core'

//Async
import { Observable } from 'rxjs'

//Services
import { HttpService } from '../http-service/http-service'

//Environment
import { environment } from 'src/environments/environment'

//Interfaces
import { PokemonGenerationsResponse, PokemonGeneration } from './interfaces/pokemon-generation.interface'

@Injectable()
export class PokeAPIService {

	constructor (
		private http: HttpService
	) {

	}

	getPokemonGenerations(): Observable<PokemonGenerationsResponse> {
		return this.http.get(environment.api.url + 'generation/')
	}

	getPokemonGenerationByURL(url: string): Observable<PokemonGeneration> {
		return this.http.get(url)
	}
	
}
