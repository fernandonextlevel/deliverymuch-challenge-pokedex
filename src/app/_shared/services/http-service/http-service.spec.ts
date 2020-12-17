import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'
import { HttpService } from './http-service'

describe('HttpService', () => {
	beforeEach((async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				HttpService
			]
		})
	}))

	it('should be created', inject([HttpService], (service: HttpService) => {
		expect(service).toBeTruthy()
	}))
})
