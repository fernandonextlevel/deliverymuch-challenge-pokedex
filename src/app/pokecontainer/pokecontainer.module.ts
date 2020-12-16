//Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

//Components
import { PokecontainerComponent } from './pokecontainer.component'
import { SidemenuComponent } from './sidemenu/sidemenu.component'
import { PokemapComponent } from './pokemap/pokemap.component'

//Shared Modules
import { ComponentsModule } from "../_shared/modules/components.module"

@NgModule({
  declarations:
  [
    PokecontainerComponent,
    SidemenuComponent,
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
    SidemenuComponent,
    PokemapComponent
  ]
})

export class PokecontainerModule { }
