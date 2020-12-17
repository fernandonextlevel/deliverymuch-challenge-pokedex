import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoadingComponent } from '../_shared/components/loading/loading.component'
import { PokeAPIService } from '../_shared/services/pokeapi-service/pokeapi-service'
import { TemplateService } from '../_shared/services/template-service/template-service'

import { PokecontainerComponent } from './pokecontainer.component'

describe('PokecontainerComponent', () => {
	let component: PokecontainerComponent
	let fixture: ComponentFixture<PokecontainerComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				BrowserAnimationsModule
			],
			declarations: [
				PokecontainerComponent,
				LoadingComponent
			],
			providers: [
				TemplateService,
				PokeAPIService
			]
		})
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PokecontainerComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
