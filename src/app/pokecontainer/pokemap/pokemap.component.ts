//Angular
import { Component, OnInit } from '@angular/core'
import { trigger, transition, style, animate } from '@angular/animations'

//Interfaces
import {
	GenerationInfo,
	GenerationVersionGroup,
	PokemonGeneration,
	PokemonSpecies
} from 'src/app/_shared/services/pokeapi-service/interfaces/pokemon-generation.interface'

@Component({
	selector: 'pokedex-pokemap',
	templateUrl: './pokemap.component.html',
	styleUrls: ['./pokemap.component.scss'],
	animations: [
		trigger('FadeTrigger', [
			transition('void => *', [
				style({ opacity: 0 }),
				animate("1s linear", style({ opacity: 1 }))
			]),
		])
	]
})

export class PokemapComponent implements OnInit {

	Animate: any
	selectedPokemonGeneration: PokemonGeneration | undefined
	pokemonGenerationInfo!: GenerationInfo
	pokemonVersionList!: GenerationVersionGroup[]
	pokemonSpeciesList!: PokemonSpecies[]

	constructor(

	) {

	}

	ngOnInit(): void {
		if (this.selectedPokemonGeneration) {
			this.pokemonGenerationInfo = {
				enName: this.selectedPokemonGeneration.names.filter((generationNameByLang) => {
					return generationNameByLang.language.name === 'en'
				})[0].name,
				mainRegionName: this.selectedPokemonGeneration
					.main_region.name,
				pokemonsAmount: this.selectedPokemonGeneration
					.pokemon_species.length
			}
			this.pokemonVersionList = this.selectedPokemonGeneration
				.version_groups
			this.pokemonSpeciesList = this.selectedPokemonGeneration
				.pokemon_species
				.sort((a, b) => (a.name > b.name) ? 1 : -1)
		}
	}

	getPokeMapBackground(name: string) {
		return `url('../../../assets/images/region-backgrounds/${name}.png')`
	}
}
