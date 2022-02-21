import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

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

}
