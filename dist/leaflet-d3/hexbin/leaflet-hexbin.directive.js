import { Directive, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import * as L from 'leaflet';
import '@asymmetrik/leaflet-d3';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
var LeafletHexbinDirective = /** @class */ (function () {
    function LeafletHexbinDirective(leafletDirective, zone) {
        this.zone = zone;
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
        this.zone.runOutsideAngular(function () {
            _this.hexbinLayer = L.hexbinLayer(_this.hexbinOptions);
        });
        // Fire the ready event
        this.layerReady.emit(this.hexbinLayer);
        // register for the hexbin events
        this.hexbinLayer.dispatch().on('mouseover', function (p) {
            _this.zone.run(function () {
                _this.hexbinMouseover.emit(p);
            });
        });
        this.hexbinLayer.dispatch().on('mouseout', function (p) {
            _this.zone.run(function () {
                _this.hexbinMouseout.emit(p);
            });
        });
        this.hexbinLayer.dispatch().on('click', function (p) {
            _this.zone.run(function () {
                _this.hexbinClick.emit(p);
            });
        });
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
        var _this = this;
        // Only if there is a hexbinLayer do we apply the data
        if (null != this.hexbinLayer) {
            this.zone.runOutsideAngular(function () {
                _this.hexbinLayer.data(data);
            });
        }
    };
    LeafletHexbinDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[leafletHexbin]'
                },] },
    ];
    /** @nocollapse */
    LeafletHexbinDirective.ctorParameters = function () { return [
        { type: LeafletDirective, },
        { type: NgZone, },
    ]; };
    LeafletHexbinDirective.propDecorators = {
        "hexbinData": [{ type: Input, args: ['leafletHexbin',] },],
        "hexbinOptions": [{ type: Input, args: ['leafletHexbinOptions',] },],
        "hexbinMouseover": [{ type: Output, args: ['leafletHexbinMouseover',] },],
        "hexbinMouseout": [{ type: Output, args: ['leafletHexbinMouseout',] },],
        "hexbinClick": [{ type: Output, args: ['leafletHexbinClick',] },],
        "layerReady": [{ type: Output, args: ['leafletHexbinLayerReady',] },],
    };
    return LeafletHexbinDirective;
}());
export { LeafletHexbinDirective };
//# sourceMappingURL=leaflet-hexbin.directive.js.map