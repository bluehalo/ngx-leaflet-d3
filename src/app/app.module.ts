import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeafletD3DemoModule } from './leaflet-d3-demo/leaflet-d3-demo.module';

@NgModule({
	imports: [
		BrowserModule,
		LeafletD3DemoModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ ]
})
export class AppModule { }
