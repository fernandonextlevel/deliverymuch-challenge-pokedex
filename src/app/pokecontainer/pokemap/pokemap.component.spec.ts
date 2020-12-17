import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PokemapComponent } from './pokemap.component'

describe('PokemapComponent', () => {
	let component: PokemapComponent
	let fixture: ComponentFixture<PokemapComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemapComponent]
		})
			.compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(PokemapComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
