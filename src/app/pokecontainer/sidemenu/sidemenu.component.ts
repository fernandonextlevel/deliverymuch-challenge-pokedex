//Angular
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

//Interfaces
import { PokemonGeneration, PokemonGenerationMenuItem } from '../../_shared/services/pokeapi-service/interfaces/pokemon-generation.interface'

@Component({
  selector: 'pokedex-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})

export class SidemenuComponent implements OnInit {

  @Input() pokemonGenerationMenuItems!: PokemonGenerationMenuItem[]
  @Output("loadPokemonGeneration") loadPokemonGeneration: EventEmitter<PokemonGenerationMenuItem> = new EventEmitter
  selectedMenuItem!: PokemonGenerationMenuItem

  constructor (

  ) {

  }

  ngOnInit(): void {

  }

  selectPokemonGeneration(generationMenuItem: PokemonGenerationMenuItem) {
    this.selectedMenuItem = generationMenuItem
    this.loadPokemonGeneration.emit(generationMenuItem)
  }

  getMenuItemBackground(name: string) {
    return `url('../../../assets/images/generations-menu/${name}.png')`
  }
}
