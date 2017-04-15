# @asymmetrik/angular2-leaflet-draw

[![Build Status][travis-image]][travis-url]

> @asymmetrik/leaflet-d3 extension to the @asymmetrik/angular2-leaflet package for Angular 2
> Provides @asymmetrik/leaflet-d3 integration into Angular 2 projects. Compatible with Leaflet v1.0.x and @asymmetrik/leaflet-d3 v2.x

> Now supports Angular v4, Ahead-of-Time compilation (AOT), and use in Angular-CLI based projects

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
npm install d3
npm install leaflet
npm install @asymmetrik/leaflet-d3
npm install @asymmetrik/angular2-leaflet
```

If you intend to use this library in a typescript project (utilizing the typings), you will need to also install the leaflet typings via npm:
```
npm install @types/d3
npm install @types/leaflet
```

If you want to run the demo, clone the repository, perform an ```npm install```, ```gulp dev``` and then go to http://localhost:9000/src/demo/index.html


## Usage

This plugin is used with the [Angular 2 Leaflet plugin](https://github.com/Asymmetrik/angular2-leaflet).

To create a map, use the ```leaflet``` attribute directive. This directive must appear first.
You must specify an initial zoom/center and set of layers either via ```leafletOptions``` or by binding to ```leafletZoom```, ```leafletCenter```, and ```leafletLayers```.

```html
<div leaflet style="height: 400px;"
     XXX
     [leafletOptions]="options"
     [leafletDrawOptions]="drawOptions">
</div>
```

### XXX
blah blah 


## Contribute
PRs accepted. If you are part of Asymmetrik, please make contributions on feature branches off of the ```develop``` branch. If you are outside of Asymmetrik, please fork our repo to make contributions.


## License
See LICENSE in repository for details.


## Credits
**[Leaflet](http://leafletjs.com/)** Is an awesome mapping package.
**[D3](https://d3js.org)** Is an awesome visualization kernel.


[travis-url]: https://travis-ci.org/Asymmetrik/angular2-leaflet-d3/
[travis-image]: https://travis-ci.org/Asymmetrik/angular2-leaflet-d3.svg
