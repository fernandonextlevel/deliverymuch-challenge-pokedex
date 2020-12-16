//Angular
import { ComponentFactoryResolver, Injectable, Inject, ViewContainerRef, Component, Type, ComponentRef } from '@angular/core'

//Interfaces
import { PokemonGeneration } from '../pokeapi-service/interfaces/pokemon-generation.interface'

//Components
import { PokemapComponent } from 'src/app/pokecontainer/pokemap/pokemap.component'

@Injectable()
export class TemplateService {

	rootViewContainer: any

	constructor (
		@Inject (ComponentFactoryResolver)
		public factoryResolver: ComponentFactoryResolver
	) {

	}

	setRootViewContainerRef(viewContainerRef: ViewContainerRef): void {
		this.rootViewContainer = viewContainerRef
	}

	loadTemplate(template: Type<PokemapComponent>, selectedPokemonGeneration: PokemonGeneration | undefined) {
		this.rootViewContainer.clear()
		const component: ComponentRef<PokemapComponent> = this.factoryResolver
						.resolveComponentFactory(template)
						.create(this.rootViewContainer.parentInjector)
		component.instance.selectedPokemonGeneration = selectedPokemonGeneration
		this.rootViewContainer.insert(component.hostView)
		window.scrollTo(0, 0)
	}
}
