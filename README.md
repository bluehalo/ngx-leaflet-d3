# @asymmetrik/ngx-leaflet-d3

[![Build Status][travis-image]][travis-url]

[travis-url]: https://travis-ci.org/Asymmetrik/ngx-leaflet-d3/
[travis-image]: https://travis-ci.org/Asymmetrik/ngx-leaflet-d3.svg

> @asymmetrik/leaflet-d3 extension to the @asymmetrik/ngx-leaflet package for Angular.io
> Provides @asymmetrik/leaflet-d3 integration into Angular.io projects.
> Compatible with Leaflet v1.x, @asymmetrik/leaflet-d3 v6.x, and d3 v7.x

> Now supports Angular v15 and Ivy

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)
- [Credits](#credits)


## Install
Install the package and its peer dependencies via npm:
```
npm install d3 leaflet @asymmetrik/leaflet-d3 @asymmetrik/ngx-leaflet @asymmetrik/ngx-leaflet-d3
```

If you intend to use this library in a typescript project (utilizing the typings), you will need to also install the leaflet typings via npm:
```
npm install @types/d3 @types/leaflet
```

If you want to run the demo, clone the repository, perform an ```npm install```, ```npm run demo``` and then go to http://localhost:4200


## Usage
This plugin is used with the [Angular.io Leaflet plugin](https://github.com/Asymmetrik/ngx-leaflet).

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

See the README for @asymmetrik/leaflet-d3 for details regarding the default options and default data schema.


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
This section includes more detailed documentation of the functionality of the directives included in this library.

### Hexbins
There are several input and output bindings for the hexbin layer.
They are documented and demonstrated below.

```html
<div leaflet style="height: 300px;"
	 [leafletOptions]="options"
	 [leafletHexbin]="hexbinData"
	 [leafletHexbinOptions]="hexbinOptions"
	 (leafletHexbinMouseover)="mouseover($event)"
	 (leafletHexbinMouseout)="mouseout($event)"
	 (leafletHexbinClick)="click($event)"
	 (leafletHexbinLayerReady)="ready($event)">
</div>
```

#### leafletHexbin
Input binding for the data array that is aggregated by the hexbins.

#### leafletHexbinOptions
Input binding for hexbin options (see [Leaflet D3's](https://github.com/Asymmetrik/leaflet-d3) docs).
This allows you to set some basic settings for the hexbin layer.

#### leafletHexbinMouseover
Event emitter/output binding for hexbin mouseover event (see [Leaflet D3's](https://github.com/Asymmetrik/leaflet-d3) docs).
This event is fired when the mouse hovers over a hexbin.

#### leafletHexbinMouseout
Event emitter/output binding for hexbin mouseout event (see [Leaflet D3's](https://github.com/Asymmetrik/leaflet-d3) docs).
This event is fired when the mouse leaves a hexbin.

#### leafletHexbinClick
Event emitter/output binding for hexbin click event (see [Leaflet D3's](https://github.com/Asymmetrik/leaflet-d3) docs).
This event is fired when the mouse clicks on a hexbin.

#### leafletHexbinLayerReady
Event emitter/output binding for hexbin layer ready event.
This event is emitted after the hexbin layer has been created and includes a reference to the layer.
This provides an opportunity to do any advanced configuration not already supported by the directive.


### Pings
There is an input binding and an output binding for the ping layer.
They are documented and demonstrated below.

```html
<div leaflet style="height: 300px;"
     [leafletOptions]="options"
     leafletPing
     [leafletPingOptions]="pingOptions"
     (leafletPingObserver)="setLeafletPingObserver($event)">
</div>
```

#### leafletPing
This is the directive attribute that activates the directive.

#### leafletPingOptions
Input binding for the leaflet ping layer options (see [Leaflet D3's](https://github.com/Asymmetrik/leaflet-d3) docs).

#### leafletPingObserver
Event emitter/output binding for ping layer observer.
The observer is how pings are emitted to the layer.

```js
setLeafletPingObserver(observer: Observer<any>) {

	this.leafletPingObserver = observer;

	// Start the ping loop
	setTimeout(this.generatePings.bind(this), 100);

}

private generatePings() {

	this.leafletPingObserver.next({
		data: [ 40, 50 ]  // [ lng, lat ]
	});

	setTimeout(this.generatePings.bind(this), 100);
}
```

The data schema for pings is: 
```js
leafletPingObserver.next(pingData: LeafletPingEvent)

class LeafletPingEvent {
	data: [lng, lat];
	cssClass?: string;
}
```


## Contribute
PRs accepted. If you are part of Asymmetrik, please make contributions on feature branches off of the ```develop``` branch. If you are outside of Asymmetrik, please fork our repo to make contributions.


## License
See LICENSE in repository for details.


## Credits
**[Leaflet](http://leafletjs.com/)** Is an awesome mapping package.
**[D3](https://d3js.org)** Is an awesome visualization kernel.
