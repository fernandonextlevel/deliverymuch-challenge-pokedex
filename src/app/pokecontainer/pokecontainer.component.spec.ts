import { of } from 'rxjs'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoadingComponent } from '../_shared/components/loading/loading.component'
import { PokemonGeneration, PokemonGenerationRef } from '../_shared/services/pokeapi-service/interfaces/pokemon-generation.interface'
import { PokeAPIService } from '../_shared/services/pokeapi-service/pokeapi-service'
import { mockedPokemonGenerationsResponse, mockedPokemonGenerationResponse } from '../_shared/services/pokeapi-service/pokeapi-service.mocks'
import { TemplateService } from '../_shared/services/template-service/template-service'
import { GenerationsmenuComponent } from './generationsmenu/generationsmenu.component'
import { PokecontainerComponent } from './pokecontainer.component'

describe('PokecontainerComponent', () => {
	let component: PokecontainerComponent
	let fixture: ComponentFixture<PokecontainerComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				BrowserAnimationsModule
			],
			declarations: [
				LoadingComponent,
				PokecontainerComponent,
				GenerationsmenuComponent,
			],
			providers: [
				TemplateService,
				PokeAPIService
			]
		})
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PokecontainerComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should call the API to fetch the Pokémon Generation Refs, and then fetch a Pokémon Generation Data', waitForAsync(() => {
		const pokemonGenerationRefs: PokemonGenerationRef[] = mockedPokemonGenerationsResponse.results
		const pokemonGenerationData: PokemonGeneration = mockedPokemonGenerationResponse
		spyOn(component.pokeAPIService, 'getPokemonGenerations').and.returnValue(of(mockedPokemonGenerationsResponse))
		spyOn(component.pokeAPIService, 'getPokemonGenerationByURL').and.returnValue(of(pokemonGenerationData))
		component.fetchPokemonGenerations()
		fixture.detectChanges()
		expect(component.pokemonGenerationRefs).toEqual(pokemonGenerationRefs)
	}))

	it('should load the Template of a Pokémon Generation', () => {
		component.loadPokemonGeneration(
			{
				name: "generation-i",
				url: "https://pokeapi.co/api/v2/generation/1/"
			}
		)
	})
})
