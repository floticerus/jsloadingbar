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
		'script1.js',
		'script2.js',
		'script3.js'
	]);
</script>
```

#### custom css
```javascript
new zodd([
	'script1.js',
	'script2.js',
	'script3.js'
], {
	css: {
		modal: {
			background: 'white'
		},
		loadingBarWrapper: {
			background: 'black',
			height: '1px'
		}
	}
});
```