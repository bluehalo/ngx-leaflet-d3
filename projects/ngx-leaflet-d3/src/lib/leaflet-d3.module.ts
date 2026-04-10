import { NgModule } from '@angular/core';

import { LeafletHexbinDirective } from './hexbin/leaflet-hexbin.directive';
import { LeafletPingDirective } from './ping/leaflet-ping.directive';

@NgModule({
	imports: [
		LeafletHexbinDirective,
		LeafletPingDirective
	],
	exports: [
		LeafletHexbinDirective,
		LeafletPingDirective
	]
})
export class LeafletD3Module {

}
