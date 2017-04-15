import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/angular2-leaflet';

// Local Imports
import { LeafletD3DemoComponent } from './leaflet-d3-demo.component';
import { LeafletD3Module } from '../../../leaflet-d3/leaflet-d3.module';

@NgModule({
	imports: [
		LeafletModule,
		LeafletD3Module
	],
	declarations: [
		LeafletD3DemoComponent
	],
	exports: [
		LeafletD3DemoComponent
	],
	bootstrap: [ LeafletD3DemoComponent ],
	providers: [ ]
})
export class LeafletD3DemoModule { }
