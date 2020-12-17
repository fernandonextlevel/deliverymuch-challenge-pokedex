import { inject, TestBed } from '@angular/core/testing'
import { TemplateService } from './template-service'

describe('TemplateService', () => {
	beforeEach((async () => {
		await TestBed.configureTestingModule({
			providers: [
				TemplateService
			]
		})
	}))

	it('should be created', inject([TemplateService], (service: TemplateService) => {
		expect(service).toBeTruthy()
	}))
})
