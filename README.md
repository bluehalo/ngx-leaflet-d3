# @bluehalo/ngx-leaflet-d3

[![NPM version](https://img.shields.io/npm/v/%40bluehalo%2Fngx-leaflet-d3)](https://www.npmjs.com/package/@bluehalo/ngx-leaflet-d3)
[![CI](https://github.com/bluehalo/ngx-leaflet-d3/actions/workflows/ci.yml/badge.svg)](https://github.com/bluehalo/ngx-leaflet-d3/actions/workflows/ci.yml)
[![Code Coverage](https://codecov.io/gh/bluehalo/ngx-leaflet-d3/graph/badge.svg)](https://codecov.io/gh/bluehalo/ngx-leaflet-d3)

> [@bluehalo/leaflet-d3](https://github.com/bluehalo/leaflet-d3) extension to the [@bluehalo/ngx-leaflet](https://github.com/bluehalo/ngx-leaflet) package for Angular.
> Provides D3 visualization layer integration (hexbins, pings) into Angular projects.
> Compatible with Leaflet v1.x, @bluehalo/leaflet-d3 v6.x, and D3 v7.x

> Supports Angular v21 with standalone directives

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](docs/API.md)
- [Contribute](#contribute)
- [License](#license)
- [Credits](#credits)


## Install
Install the package and its peer dependencies via npm:
```
npm install d3 d3-hexbin leaflet @bluehalo/leaflet-d3 @bluehalo/ngx-leaflet @bluehalo/ngx-leaflet-d3
```

If you intend to use this library in a typescript project (utilizing the typings), you will need to also install the leaflet typings via npm:
```
npm install @types/d3 @types/leaflet
```

If you want to run the demo, clone the repository, perform an ```npm install```, ```npm run demo``` and then go to http://localhost:4200


## Usage
This plugin is used with the [Angular.io Leaflet plugin](https://github.com/bluehalo/ngx-leaflet).

### Hexbins
Hexbins allow you to aggregate data into bins with a hexagon geometry.
The hexbin layer allows you to bind characteristics of the bound data to both the size and color of the drawn bin within the bin grid element.

#### Styling
You'll want to style the hexbins at least with a stroke size/color.

```
.hexbin-hexagon {
	stroke: #000;
	stroke-width: .5px;
}
```

#### Basic Example
To create a hexbin layer on a map, use the ```leafletHexbin``` attribute directive. This directive must appear after the ```leaflet``` directive.
This attribute directive also acts as an input binding for the hexbin data array. 

```html
<div leaflet style="height: 300px;"
	 [leafletOptions]="options"
	 [leafletHexbin]="hexbinData">
</div>
```

```js
hexbinData: [ number, number ][] = [...];
```

#### Multiple Hexbin Layers on the Same Map
You can also draw multiple hexbin layers on the same map (see the demo example).
In this case, you'd want to have multiple hexbin options so you can set the colors (or sizes) differently.
All you need to do is bound the ```leafletHexbin``` directive to a child div of the div with the ```leaflet``` directive.

```html
<div leaflet style="height: 300px;"
	 [leafletOptions]="options">
	 
	 <div [leafletHexbin]="hexbinData1" [leafletHexbinOptions]="hexbinOptions1"></div>
     <div [leafletHexbin]="hexbinData2" [leafletHexbinOptions]="hexbinOptions2"></div>

</div>
```

```js
hexbinOptions1: L.HexbinLayerConfig = { radius: 12,	radiusRange: [ 4, 11 ],	colorRange: [ 'white', 'tomato' ] };
hexbinOptions2: L.HexbinLayerConfig = { radius: 12,	radiusRange: [ 4, 11 ],	colorRange: [ 'white', 'steelblue' ] };

hexbinData1: [ number, number ][] = [...];
hexbinData2: [ number, number ][] = [...];
```

> It's important to note that for performance reasons, we're keeping all change detection strategies default.
> This means that all bound data structures must be treated as immutable.
> For changes to be detected, instance equality must change.

See the README for @bluehalo/leaflet-d3 for details regarding the default options and default data schema.


### Pings
To create a ping layer on a map, use the ```leafletPing``` attribute directive. This directive must appear after the ```leaflet``` directive.

```html
<div leaflet style="height: 300px;"
     [leafletOptions]="options"
     leafletPing
     (leafletPingObserver)="setLeafletPingObserver($event)">
</div>
```

The output binding for ```leafletPingObserver``` provides an Rxjs Observer that you will use to emit ping objects to the directive.


## API

Full API documentation is in [docs/API.md](docs/API.md). It covers:
- `[leafletHexbin]` — data input, options, mouse events (mouseover, mouseout, click), and layer ready callback
- `[leafletPing]` — directive activation, options input, and the RxJS observer pattern for emitting pings


## Contribute
PRs accepted. Please make contributions on feature branches and open a pull request against `master`.


## License
See [LICENSE](LICENSE) for details.


## Credits
**[Leaflet](http://leafletjs.com/)** Is an awesome mapping package.
**[D3](https://d3js.org)** Is an awesome visualization kernel.
