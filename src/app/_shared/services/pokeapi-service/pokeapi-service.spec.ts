import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed, getTestBed } from '@angular/core/testing'
import { PokeAPIService } from './pokeapi-service'
import { mockedPokemonGenerationsResponse, mockedPokemonGenerationResponse } from './pokeapi-service.mocks'

describe('PokeAPIService', () => {
	let injector: TestBed
	let service: PokeAPIService
	let httpMock: HttpTestingController

	beforeEach((() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				PokeAPIService
			]
		})
		injector = getTestBed()
		service = injector.inject(PokeAPIService)
		httpMock = injector.inject(HttpTestingController)
	}))

	afterEach(() => {
		httpMock.verify()
	})


	describe('#getPokemonGenerations', () => {
		it('should get the Pokemon Generations', () => {		
			service.getPokemonGenerations().subscribe(pokemonGenerationRefs => {
				expect(pokemonGenerationRefs.results.length).toBe(8)
				expect(pokemonGenerationRefs).toEqual(mockedPokemonGenerationsResponse)
			})
			const request = httpMock.expectOne('https://pokeapi.co/api/v2/generation/')
			expect(request.request.method).toBe('GET')
			request.flush(mockedPokemonGenerationsResponse)
		})
	})

	describe('#getPokemonGenerationByURL', () => {
		it('should get a Pokemon Generation with ID 1', () => {
			const mockedPokemonGenerationRequestData = 'https://pokeapi.co/api/v2/generation/1/'
			service.getPokemonGenerationByURL(mockedPokemonGenerationRequestData).subscribe(pokemonGeneration => {
				expect(pokemonGeneration).toEqual(mockedPokemonGenerationResponse)
			})
			const request = httpMock.expectOne('https://pokeapi.co/api/v2/generation/1/')
			expect(request.request.method).toBe('GET')
			request.flush(mockedPokemonGenerationResponse)
		})
	})	
})
