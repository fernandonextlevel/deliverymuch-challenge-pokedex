//Angular
import { NgModule } from '@angular/core'

//Services
import { TemplateService } from '../services/template-service/template-service'
import { PokeAPIService } from '../services/pokeapi-service/pokeapi-service'

@NgModule({
	providers:
		[
			TemplateService,
			PokeAPIService
		]
})

export class ServicesModule { }
