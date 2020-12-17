import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GenerationsmenuComponent } from './generationsmenu.component'

describe('GenerationsmenuComponent', () => {
	let component: GenerationsmenuComponent
	let fixture: ComponentFixture<GenerationsmenuComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GenerationsmenuComponent]
		})
			.compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(GenerationsmenuComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
