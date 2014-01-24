zoddjs
======

zodd tiny loading bar for modernizr/yepnope.

zodd test bunch of browser, zodd work bunch of browser (even old ie).

zodd use original yepnope syntax.

zodd set css in javascript only one http request.

zodd just 1.32kb minified gzipped.

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
