# Changelog

## 21.0.1
- Docs: restructured README — extracted API reference to docs/
- Demo: upgraded Bootstrap 4 → 5 (closes #62)
- CI: upgraded to Node 24, actions/checkout and actions/setup-node to v6; migrated builders to @angular/build; added Codecov integration
- Chore: updated copyright to BlueHalo LLC; package.json consistency fixes; disabled CLI analytics telemetry; added npm version badge

## 21.0.0
- Angular 21
- Migrated package to `@bluehalo/ngx-leaflet-d3` namespace (previously `@asymmetrik/ngx-leaflet-d3`)
- Updated peer dependency `@asymmetrik/ngx-leaflet` → `@bluehalo/ngx-leaflet@21`
- Updated peer dependency `@asymmetrik/leaflet-d3` → `@bluehalo/leaflet-d3@6`
- Converted directives to standalone (`LeafletHexbinDirective`, `LeafletPingDirective`)
- Fix: replace deprecated `Observable.create()` with `new Observable()`
- CI: replace Travis CI with GitHub Actions

## 14.0.0
- Angular 14

## 13.0.0
- Angular 13
- D3 7.x

## 6.0.0
- Angular 10

## 4.0.0
- Angular 8

## 3.0.0
- Angular 7 support
- D3 5.x support
- Started using the HtmlWebpackPlugin to generate the index.html file in the dist dir, so you don't need to add `/src/demo` to the end of the URL to hit the demo.
- Migrated to npm scripts from gulp for build system
- Upgrade to Webpack 4.x for demo
