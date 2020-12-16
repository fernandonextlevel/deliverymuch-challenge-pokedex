//Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

//Components
import { PokecontainerComponent } from './pokecontainer.component'
import { GenerationsmenuComponent } from './generationsmenu/generationsmenu.component'
import { PokemapComponent } from './pokemap/pokemap.component'

//Shared Modules
import { ComponentsModule } from "../_shared/modules/components.module"

@NgModule({
  declarations:
  [
    PokecontainerComponent,
    GenerationsmenuComponent,
    PokemapComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule
  ],
  exports:
  [
    PokecontainerComponent,
    GenerationsmenuComponent,
    PokemapComponent
  ]
})

export class PokecontainerModule { }
