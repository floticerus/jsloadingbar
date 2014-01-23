zoddjs
======

a tiny loading bar for modernizr/yepnope.

zodd works off of the original yepnope syntax, so using it should basically be the same.

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
	scrollDuration: 1
});
```
