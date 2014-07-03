zoddjs
======

zodd is a tiny loading bar built on top of yepnope.

tested in a bunch of browsers, works in a bunch of browsers (even old ie).

uses original yepnope syntax.

sets css in javascript, so there is only one http request.

just 3.05kb minified and gzipped.

current version is 0.0.4.

MIT license.

#### simple example
```html
<script src="zodd.js"></script>
<script>
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
	scrollDuration: 1,

	// if set, zodd will contain itself within the target element.
	// when using the default CSS options, the target must have
	// relative position. zodd runs a test on the style and if it
	// detects that position is not set, it will set it as relative.
	targetElement: document.getElementById( 'target' ),

	// shortcut for the above
	targetElementById: 'target'
});
```
