import { NgModule } from '@angular/core';

import { HexbinDemoComponent } from './hexbin/hexbin-demo.component';
import { PingDemoComponent } from './ping/ping-demo.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Local Imports
import { LeafletD3DemoComponent } from './leaflet-d3-demo.component';
import { LeafletD3Module } from '../../../projects/ngx-leaflet-d3/src/lib/leaflet-d3.module';

@NgModule({
	imports: [
		LeafletModule,
		LeafletD3Module
	],
	declarations: [
		HexbinDemoComponent,
		LeafletD3DemoComponent,
		PingDemoComponent
	],
	exports: [
		LeafletD3DemoComponent
	],
	bootstrap: [ LeafletD3DemoComponent ],
	providers: [ ]
})
export class LeafletD3DemoModule { }
