//Angular
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

//Main Component
import { AppComponent } from './app.component'

//Shared
import { ServicesModule } from './_shared/modules/services.module'

//Modules
import { PokecontainerModule } from './pokecontainer/pokecontainer.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServicesModule,
    PokecontainerModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
