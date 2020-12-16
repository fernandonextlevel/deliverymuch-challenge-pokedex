//Angular
import { Component, OnInit } from '@angular/core'
import { trigger, transition, style, animate } from '@angular/animations'

//Interfaces
import { GenerationInfo, GenerationVersionGroup, PokemonGeneration, PokemonSpecies } from 'src/app/_shared/services/pokeapi-service/interfaces/pokemon-generation.interface'

@Component({
	selector: 'pokedex-pokemap',
	templateUrl: './pokemap.component.html',
	styleUrls: ['./pokemap.component.scss'],
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

export class PokemapComponent implements OnInit {

	Animate: any
	selectedPokemonGeneration!: PokemonGeneration
	pokemonGenerationInfo!: GenerationInfo
	pokemonVersionList!: GenerationVersionGroup[]
	pokemonSpeciesList!: PokemonSpecies[]

	constructor(

	) {

	}

	ngOnInit(): void {
		console.dir(this.selectedPokemonGeneration)
		this.pokemonGenerationInfo = {
			enName: this.selectedPokemonGeneration.names.filter((generationNameByLang) => {
				return generationNameByLang.language.name === 'en'
			})[0].name,
			mainRegionName: this.selectedPokemonGeneration.main_region.name,
			pokemonsAmount: this.selectedPokemonGeneration.pokemon_species.length
		}
		this.pokemonVersionList = this.selectedPokemonGeneration.version_groups;
		this.pokemonSpeciesList = this.selectedPokemonGeneration.pokemon_species.sort((a, b) => (a.name > b.name) ? 1 : -1);
	}

	getPokeMapBackground(name: string) {
		return `rgba(255,255,255,0.5) url('../../../assets/images/region-backgrounds/${name}.png') center center / cover no-repeat `
	}
}
