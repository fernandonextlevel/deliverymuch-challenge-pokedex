import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { ServicesModule } from './_shared/modules/services.module'
import { TemplateService } from './_shared/services/template-service/template-service'

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ServicesModule
      ]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
