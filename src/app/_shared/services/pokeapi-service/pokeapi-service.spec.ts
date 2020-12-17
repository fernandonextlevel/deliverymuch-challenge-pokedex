import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'
import { PokeAPIService } from './pokeapi-service'

describe('PokeAPIService', () => {
	beforeEach((async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				PokeAPIService
			]
		})
	}))

	it('should be created', inject([PokeAPIService], (service: PokeAPIService) => {
		expect(service).toBeTruthy()
	}))
})
