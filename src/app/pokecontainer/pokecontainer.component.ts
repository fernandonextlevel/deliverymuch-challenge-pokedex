//Angular
import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core'
import { trigger, transition, style, animate } from '@angular/animations'

//Services
import { TemplateService } from '../_shared/services/template-service/template-service'
import { PokeAPIService } from '../_shared/services/pokeapi-service/pokeapi-service'

//Interfaces
import { PokemonGenerationRef, PokemonGeneration, PokemonGenerationMenuItem } from '../_shared/services/pokeapi-service/interfaces/pokemon-generation.interface'

//Components
import { PokemapComponent } from './pokemap/pokemap.component'

@Component({
	selector: 'pokedex-pokecontainer',
	templateUrl: './pokecontainer.component.html',
	styleUrls: ['./pokecontainer.component.scss'],
	animations: [
		trigger('FadeTrigger', [
			transition('void => *', [
				style({ opacity: 0 }),
				animate(".5s ease-in", style({ opacity: 1 }))
			]),
			transition('* => void', [
				style({ opacity: 1 }),
				animate(".5s ease-out", style({ opacity: 0 }))
			])
		])
	]
})

export class PokecontainerComponent implements OnInit {

	Animate: any
	isLoading: boolean
	pokemonGenerationRefs!: PokemonGenerationRef[]
	pokemonGenerations: PokemonGeneration[] = []
	pokemonGenerationMenuItems: PokemonGenerationMenuItem[] = []
	selectedPokemonGeneration!: PokemonGeneration

	//Read View References
	@ViewChild('content', { read: ViewContainerRef, static: true }) vCR?: ViewContainerRef

	constructor (
		private templateService: TemplateService,
		private pokeAPIService: PokeAPIService
	) {
		this.isLoading = true
	}

	ngOnInit(): void {
		this.fetchPokemonGenerations()
	}

	clearTemplate(): void {
		if (this.vCR) {
			this.templateService.setRootViewContainerRef(this.vCR)
		}
	}

	loadTemplate(component: Type<PokemapComponent>, selectedPokemonGeneration: PokemonGeneration): void {
		this.clearTemplate()
		this.templateService.loadTemplate(component, selectedPokemonGeneration)
	}

	fetchPokemonGenerations(): void {
		this.pokeAPIService.getPokemonGenerations().subscribe((pokemonGenerationsResponse) => {
			this.pokemonGenerationRefs = pokemonGenerationsResponse.results
			this.pokemonGenerationRefs.forEach((pokemonGenerationRef) => {
				this.pokemonGenerationMenuItems.push({
					name: pokemonGenerationRef.name,
					url: pokemonGenerationRef.url
				})
				this.pokemonGenerationMenuItems.sort((a, b) => (a.name > b.name) ? 1 : -1)
				this.pokeAPIService.getPokemonGenerationByURL(pokemonGenerationRef.url).subscribe((pokemonGeneration) => {
					this.pokemonGenerations.push(pokemonGeneration)
					if (
						this.pokemonGenerations.length === pokemonGenerationsResponse.count &&
						this.pokemonGenerationMenuItems.length === pokemonGenerationsResponse.count
					) {
						this.isLoading = false
					}
				})
			})
		})
	}

	loadPokemonGeneration(generationMenuItem: PokemonGenerationMenuItem): void {
		this.selectedPokemonGeneration = this.pokemonGenerations.filter((generation) => {
			return generation.name === generationMenuItem.name
		})[0]
		this.loadTemplate(PokemapComponent as Type<PokemapComponent>, this.selectedPokemonGeneration)
	}
}
