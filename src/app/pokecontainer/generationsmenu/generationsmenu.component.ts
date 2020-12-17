//Angular
import { Component, Input, Output, EventEmitter } from '@angular/core'

//Interfaces
import { PokemonGenerationMenuItem } from '../../_shared/services/pokeapi-service/interfaces/pokemon-generation.interface'

@Component({
	selector: 'pokedex-generationsmenu',
	templateUrl: './generationsmenu.component.html',
	styleUrls: ['./generationsmenu.component.scss'],
})

export class GenerationsmenuComponent {

	@Input() pokemonGenerationMenuItems!: PokemonGenerationMenuItem[]
	@Output("loadPokemonGeneration") loadPokemonGeneration: EventEmitter<PokemonGenerationMenuItem> = new EventEmitter
	selectedMenuItem!: PokemonGenerationMenuItem

	constructor(

	) {

	}

	selectPokemonGeneration(generationMenuItem: PokemonGenerationMenuItem) {
		this.selectedMenuItem = generationMenuItem
		this.loadPokemonGeneration.emit(generationMenuItem)
	}

	getMenuItemBackground(name: string) {
		return `url('../../../assets/images/generations-menu/${name}.png')`
	}
}
