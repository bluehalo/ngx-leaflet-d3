import { Directive } from '@angular/core';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';
var LeafletPingDirective = (function () {
    function LeafletPingDirective(leafletDirective) {
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletPingDirective.prototype.ngOnInit = function () {
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.pingLayer = L.pingLayer().addTo(map);
    };
    return LeafletPingDirective;
}());
export { LeafletPingDirective };
LeafletPingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[leafletPing]'
            },] },
];
/** @nocollapse */
LeafletPingDirective.ctorParameters = function () { return [
    { type: LeafletDirective, },
]; };
//# sourceMappingURL=leaflet-ping.directive.js.map