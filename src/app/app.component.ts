//Angular
import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core'

//Services
import { TemplateService } from './_shared/services/template-service/template-service'

@Component({
	selector: 'pokedex-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {

	//Props
	public newThemeColor: string = '#dddddd'
  
	constructor (
		private templateService: TemplateService
	) {

  	}

	ngOnInit() {
		this.setTheme()
	}
  
	setTheme(): void {
		this.templateService.calculateColors(this.newThemeColor)
	}
}
