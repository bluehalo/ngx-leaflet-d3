import { ModuleWithProviders, NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/angular2-leaflet';

import { LeafletHexbinDirective } from './hexbin/leaflet-hexbin.directive';
import { LeafletPingDirective } from './ping/leaflet-ping.directive';

@NgModule({
	imports: [
		LeafletModule
	],
	exports: [
		LeafletHexbinDirective,
		LeafletPingDirective
	],
	declarations: [
		LeafletHexbinDirective,
		LeafletPingDirective
	]
})
export class LeafletD3Module {

	static forRoot(): ModuleWithProviders {
		return { ngModule: LeafletD3Module, providers: [] };
	}

}
