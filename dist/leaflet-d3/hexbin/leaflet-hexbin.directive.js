import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as L from 'leaflet';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
var LeafletHexbinDirective = (function () {
    function LeafletHexbinDirective(leafletDirective) {
        // Hexbin data binding
        this.hexbinData = [];
        // Interaction events
        this.hexbinMouseover = new EventEmitter();
        this.hexbinMouseout = new EventEmitter();
        this.hexbinClick = new EventEmitter();
        // Fired when the layer is created
        this.layerReady = new EventEmitter();
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletHexbinDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.hexbinLayer = L.hexbinLayer(this.hexbinOptions);
        // Fire the ready event
        this.layerReady.emit(this.hexbinLayer);
        // register for the hexbin events
        this.hexbinLayer.dispatch().on('mouseover', function (p) { _this.hexbinMouseover.emit(p); });
        this.hexbinLayer.dispatch().on('mouseout', function (p) { _this.hexbinMouseout.emit(p); });
        this.hexbinLayer.dispatch().on('click', function (p) { _this.hexbinClick.emit(p); });
        this.hexbinLayer.addTo(map);
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
    'hexbinMouseover': [{ type: Output, args: ['leafletHexbinMouseover',] },],
    'hexbinMouseout': [{ type: Output, args: ['leafletHexbinMouseout',] },],
    'hexbinClick': [{ type: Output, args: ['leafletHexbinClick',] },],
    'layerReady': [{ type: Output, args: ['leafletHexbinLayerReady',] },],
};
//# sourceMappingURL=leaflet-hexbin.directive.js.map