import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { PokecontainerComponent } from './pokecontainer/pokecontainer.component'
import { ServicesModule } from './_shared/modules/services.module'

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ServicesModule
      ],      
      declarations: [
        AppComponent,
        PokecontainerComponent
      ]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
