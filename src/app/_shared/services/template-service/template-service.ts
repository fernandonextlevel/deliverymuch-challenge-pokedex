//Angular
import { ComponentFactoryResolver, Injectable, Inject, ViewContainerRef, Component, Type, ComponentRef } from '@angular/core'

//Interfaces
import { ThemeElement, ThemeColors } from './interfaces/theme.interface'
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

	loadTemplate(template: Type<PokemapComponent>, selectedPokemonGeneration: PokemonGeneration) {
		this.rootViewContainer.clear()
		const component: ComponentRef<PokemapComponent> = this.factoryResolver
						.resolveComponentFactory(template)
						.create(this.rootViewContainer.parentInjector)
		component.instance.selectedPokemonGeneration = selectedPokemonGeneration
		this.rootViewContainer.insert(component.hostView)
		window.scrollTo(0, 0)
	}

	calculateColors(color: string): ThemeColors {
		const result: RegExpExecArray | null = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
		if (result) {
			let r = parseInt(result[1], 16)
			let g = parseInt(result[2], 16)
			let b = parseInt(result[3], 16)
			r /= 255, g /= 255, b /= 255
			const max = Math.max(r, g, b), min = Math.min(r, g, b)
			let h, s, l = (max + min) / 2
			if (max === min) {
				h = s = 0
			} else {
				let d = max - min
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
				switch(max) {
					case r: h = (g - b) / d + (g < b ? 6 : 0)
						break
					case g: h = (b - r) / d + 2
						break
					case b: h = (r - g) / d + 4
						break
				}
				h ? h /= 6 : 0
			}
			const H = Number.parseInt((h ? h : 0 * 360).toFixed(2))
			const S = Number.parseInt((s * 100).toFixed(2))
			const L: number = Number.parseInt(l.toFixed(2))
			return {
				backgroundColor: `hsl(${H},${S}%,${L + 30}%)`,
				fontColor: `hsl(${H},${S}%,${L + 10}%)`,
				borderColor: `hsl(${H},${S}%,${L + 35}%)`,
				contentColor: `hsl(${H},${S}%,${L + 55}%)`,
				titleColor: `hsl(${H},${S}%,${L + 40}%)`,
				sideMenuBG: `hsl(${H},${S}%,${L + 25}%)`
			}
		} else {
			return {
				backgroundColor: `hsl(200,100%,60%)`,
				fontColor: `hsl(200,100%,30%)`,
				borderColor: `hsl(200,100%,55%)`,
				contentColor: `hsl(200,100%,75%)`,
				titleColor: `hsl(200,100%,60%)`,
				sideMenuBG: `hsl(200,100%,45%)`
			}			
		}
	}

	setThemeElements(colors: ThemeColors): void {
		const elements: ThemeElement[] = [
			{
				title: 'pageBackground',
				backgroundColor: colors.backgroundColor,
				elements: Array.from(
					document.getElementsByClassName('pageBackground')
				) as HTMLElement[],
			},
			{
				title: 'widgetContent',
				backgroundColor: colors.contentColor,
				border: colors.borderColor,
				color: colors.fontColor,
				elements: Array.from(
					document.getElementsByClassName('widgetContent')
				) as HTMLElement[],
			},
			{
				title: 'widgetTitle',
				backgroundColor: colors.titleColor,
				elements: Array.from(
					document.getElementsByClassName('widgetTitle')
				) as HTMLElement[],
			},
			{
				title: 'sideMenu',
				backgroundColor: colors.sideMenuBG,
				elements: Array.from(
					document.getElementsByClassName('sideMenu')
				) as HTMLElement[],
			},
		]

		this.setThemeColors(elements)
	}
	
	setThemeColors(elements: ThemeElement[]): void {
		elements.forEach((elementEntry: ThemeElement) => {
			for (let element of elementEntry.elements) {
				if (element.classList.contains(elementEntry.title)) {
					element.style.backgroundColor =
						elementEntry.backgroundColor ?
						elementEntry.backgroundColor : ''
					element.style.border =
						elementEntry.border ?
						elementEntry.border : ''
					element.style.color =
						elementEntry.color ?
						elementEntry.color : ''
				}
			}
		})
	}
}
