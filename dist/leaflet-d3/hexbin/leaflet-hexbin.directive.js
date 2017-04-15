import { Directive, Input } from '@angular/core';
import * as L from 'leaflet';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/angular2-leaflet';
var LeafletHexbinDirective = (function () {
    function LeafletHexbinDirective(leafletDirective) {
        this.hexbinData = [];
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletHexbinDirective.prototype.ngOnInit = function () {
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.hexbinLayer = L.hexbinLayer(this.hexbinOptions).addTo(map);
        // Initialize the data (in case the data was set before the directive was initialized)
        this.setHexbinData(this.hexbinData);
    };
    LeafletHexbinDirective.prototype.ngOnChanges = function (changes) {
        // Set the new data
        if (changes['hexbinData']) {
            this.setHexbinData(changes['hexbinData'].currentValue);
        }
    };
    LeafletHexbinDirective.prototype.setHexbinData = function (data) {
        // Only if there is a hexbinLayer do we apply the data
        if (null != this.hexbinLayer) {
            this.hexbinLayer.data(data);
        }
    };
    return LeafletHexbinDirective;
}());
export { LeafletHexbinDirective };
LeafletHexbinDirective.decorators = [
    { type: Directive, args: [{
                selector: '[leafletHexbin]'
            },] },
];
/** @nocollapse */
LeafletHexbinDirective.ctorParameters = function () { return [
    { type: LeafletDirective, },
]; };
LeafletHexbinDirective.propDecorators = {
    'hexbinData': [{ type: Input, args: ['leafletHexbin',] },],
    'hexbinOptions': [{ type: Input, args: ['leafletHexbinOptions',] },],
};
//# sourceMappingURL=leaflet-hexbin.directive.js.map