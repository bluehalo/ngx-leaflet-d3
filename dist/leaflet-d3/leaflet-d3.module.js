import { ModuleWithProviders, NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletHexbinDirective } from './hexbin/leaflet-hexbin.directive';
import { LeafletPingDirective } from './ping/leaflet-ping.directive';
var LeafletD3Module = /** @class */ (function () {
    function LeafletD3Module() {
    }
    LeafletD3Module.forRoot = function () {
        return { ngModule: LeafletD3Module, providers: [] };
    };
    LeafletD3Module.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    LeafletD3Module.ctorParameters = function () { return []; };
    return LeafletD3Module;
}());
export { LeafletD3Module };
//# sourceMappingURL=leaflet-d3.module.js.map