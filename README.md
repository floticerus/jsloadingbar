zoddjs
======

zodd is a tiny loading bar for modernizr/yepnope.

zodd is tested in a bunch of browsers, zodd works in a bunch of browsers (even old ie).

zodd uses the original yepnope syntax.

zodd sets css in javascript so there is only a single http request.

zodd is 1.15kb minified and gzipped.

#### simple example
```html
<script src="modernizr.js"></script>
<script src="zodd.js"></script>
<script>
	// zodd always expects an array
	new zodd([
		'style.css',
		'script.js'
	]);
</script>
```

#### custom css
```javascript
new zodd([
	'style.css',
	'script.js'
], {
	css: {
		modal: {
			background: 'white'
		},
		loadingBarWrapper: {
			background: 'black',
			height: '1px'
		},
		loadingBar: {
			background: 'skyblue'
		}
	}
});
```

#### more
```javascript
new zodd([
	{
		load: 'style.css',
		complete: function () {
			console.log( 'style.css loaded' );
		}
	},
	{
		load: 'script.js',
		complete: function () {
			console.log( 'script.js loaded' );
		}
	}
], {
	// sets the duration of the loadingBar css transition
	// does nothing if css transition is removed
	// default is 0.33
	scrollDuration: 1
});
```
