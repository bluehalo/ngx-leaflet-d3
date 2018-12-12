const pkg = require('./package.json');

export default {
	input: 'dist/index.js',
	external: [
		'@angular/core',
		'd3',
		'leaflet',
		'rxjs',
		'@asymmetrik/leaflet-d3',
		'@asymmetrik/ngx-leaflet'
	],
	output: {
		banner: `/*! ${pkg.name} - ${pkg.version} - ${pkg.copyright} + */`,
		file: `./dist/bundles/${pkg.artifactName}.js`,
		format: 'umd',
		globals: {
			'@angular/core': 'ng.core',
			'd3': 'd3',
			'leaflet': 'L',
			'rxjs': 'Rx',
			'@asymmetrik/leaflet-d3': 'leafletD3',
			'@asymmetrik/ngx-leaflet': 'ngxLeaflet'

		},
		name: pkg.moduleName,
		sourcemap: true
	}
};
