/** @preserve yepnope1.5.x|WTFPL
 */
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);

/** @preserve zoddjs v0.0.4 - a tiny loading bar for modernizr/yepnope
  * copyright 2014 kevin von flotow - vonflow@gmail.com
  * https://github.com/kvonflotow/zoddjs
  * MIT license
  */
( function ( window, undefined ) {
    var yep = window.yepnope ? window.yepnope : window.Modernizr && window.Modernizr.load ? window.Modernizr.load : undefined;

    if ( !yep )
        return console.error( 'zodd: modernizr or yepnope is required' );

    // make some shortcuts
    var doc = window.document,
        docElement = doc.documentElement,

        setCSS = ( function () {
            var tempElement = doc.createElement( 'div' ),
                tempStyle = tempElement.style,

                // expects an object
                funcWrapper = function ( css, done ) {
                    if ( !isObject( css ) )
                        return console.log( 'invalid css input' );

                    for ( var key in css )
                        done( key, css[ key ] );
                };

            // attempt to remove the temp element from the dom
            if ( tempElement.remove )
                tempElement.remove();

            if ( tempStyle.setProperty ) {
                // modern

                return function ( elem, css ) {
                    funcWrapper( css, function ( key, val ) {
                        elem.style.setProperty( key, val );
                    });
                };
            } else if ( tempStyle.setAttribute ) {
                // old ie

                return function ( elem, css ) {
                    funcWrapper( css, function ( key, val ) {
                        elem.style.setAttribute( key, val );
                    });
                };
            } else {
                // set directly

                return function ( elem, css ) {
                    funcWrapper( css, function ( key, val ) {
                        elem.style[ key ] = val;
                    });
                };
            }
        })();

    function isString( str ) {
        return typeof( str ) === 'string' || str instanceof String
    }

    function isObject( obj ) {
        return obj === Object( obj ) && Object.prototype.toString.call( obj ) !== '[object Array]';
    }

    // isArray polyfill
    var isArray = Array.isArray || function ( arr ) {
        return Object.prototype.toString.call( arr ) === '[object Array]';
    };

    function extend() {
        var argh = arguments;

        if ( argh.length === 1 && isArray( argh[ 0 ] ) )
            argh = argh[ 0 ];

        var first = argh[ 0 ] || [];

        if ( argh.length >= 2 )
            for ( var i = 1, l = argh.length; i < l; i += 1 )
                if ( typeof argh[ i ] !== 'undefined' )
                    for ( var key2 in argh[ i ] )
                        typeof key2 !== 'undefined' && ( first[ key2 ] = argh[ i ][ key2 ] );
                    
        return first;
    }

    function _zodd( arr, opts ) {
        this.arr = arr || [];

        this.opts = opts || {};

        this.loaderModal = doc.createElement( 'div' );
        this.loadingBar = doc.createElement( 'div' );

        this.loadPercent = 0;
        this.loaded = 0;
        this.count = this.arr.length;

        this.noTarget = false;

        this.setDefaultOpts();

        this.init();
    }

    _zodd.prototype = {
        setDefaultOpts: function () {
            // scrollDuration sets how long the default css transition
            // takes to finish for each loadingBar update
            // if css transitions for loadingBar are removed this does nothing

            // since 0 should be a valid option do a type check instead of a truthy check
            this.opts.scrollDuration = typeof this.opts.scrollDuration !== 'undefined' ? this.opts.scrollDuration : 0.33;

            if ( this.opts.targetElementById && isString( this.opts.targetElementById ) ) {
                this.opts.targetElement = document.getElementById( this.opts.targetElementById );
            } else {
                this.opts.targetElement = this.opts.targetElement || ( function () {
                    var bodies = doc.getElementsByTagName( 'body' );

                    this.noTarget = true;

                    return bodies.length !== 0 ? bodies[ 0 ] : undefined;
                }).call( this );
            }

            this.opts.css = this.opts.css || {};

            this.opts.css.modal = extend({
                'background-color': 'rgb( 233, 233, 233 )',
                'position': this.noTarget ? 'fixed' : 'absolute',
                'z-index': '100000',
                'top': '0',
                'bottom': '0',
                'left': '0',
                'right': '0',
                'opacity': '1',
                '-webkit-transition': 'opacity 0.5s',
                '-moz-transition': 'opacity 0.5s',
                '-o-transition': 'opacity 0.5s',
                'transition': 'opacity 0.5s'
            }, this.opts.css.modal || {} );

            this.opts.css.loadingBarWrapper = extend({
                'position': 'absolute',
                'top': '50%',
                'left': '0',
                'right': '0',
                'width': '80%',
                'height': '5px',
                'margin': 'auto',
                'border-radius': '2px'
            }, this.opts.css.loadingBarWrapper || {} );

            this.opts.css.loadingBar = extend({
                'background-color': 'rgb( 69, 154, 188 )',
                'width': '0%',
                'height': '100%',
                'border-radius': '2px',
                '-webkit-transition': 'width ' + this.opts.scrollDuration + 's',
                '-moz-transition': 'width ' + this.opts.scrollDuration + 's',
                '-o-transition': 'width ' + this.opts.scrollDuration + 's',
                'transition': 'width ' + this.opts.scrollDuration + 's'
            }, this.opts.css.loadingBar || {} );
        },

        init: function () {
            var loadingBarWrapper = doc.createElement( 'div' );

            if ( isString( this.arr ) ) {
                // it's a string

                this.count = 1;

                this.arr = [ { load: this.arr } ];

            } else if ( isArray( this.arr ) ) {
                // it's array, assume it's an object of arrays for now

                this.count = this.arr.length;

            } else {
                // assume it's an object

                this.count = 1;

                this.arr = [ this.arr ];
            }

            setCSS( this.loaderModal, this.opts.css.modal );

            setCSS( loadingBarWrapper, this.opts.css.loadingBarWrapper );

            this.loadingBar = doc.createElement( 'div' );

            setCSS( this.loadingBar, this.opts.css.loadingBar );

            loadingBarWrapper.appendChild( this.loadingBar );

            this.loaderModal.appendChild( loadingBarWrapper );

            // should we even do this? hm
            // for the default css to work on a target element, the target needs to have relative position
            if ( !this.noTarget && !this.opts.targetElement.style[ 'position' ] )
                setCSS( this.opts.targetElement, { 'position': 'relative' } );

            this.opts.targetElement.appendChild( this.loaderModal );

            var that = this;

            yep( ( function () {
                var ret = [];

                for ( var i = 0; i < that.count; i += 1 ) {
                    var currentArr = that.arr[ i ],
                        tempObj = {};

                    // check for string
                    if ( isString( currentArr ) )
                        tempObj = { load: currentArr };

                    // if not a string, assume it's an object
                    else for ( var key in currentArr )
                        tempObj[ key ] = currentArr[ key ];

                    // preserve original complete method
                    var tempComplete = tempObj.hasOwnProperty( 'complete' ) ? tempObj.complete : undefined;

                    tempObj.complete = ( function ( tempComplete ) {
                        return function () {
                            that.addOneToLoaded.call( that );

                            // if there was an existing complete method, fire it
                            if ( tempComplete )
                                tempComplete();
                        }
                    })( tempComplete );

                    ret.push( tempObj );
                }

                return ret;
            })() );
        },

        addOneToLoaded: function () {
            this.loadPercent = ( ( ( this.loaded += 1 / this.count ) * 100 ) + 0.5 ) | 0;

            setCSS( this.loadingBar, { 'width': this.loadPercent + '%' });

            if ( this.loadPercent === 100 ) {
                this.opts.targetElement.setAttribute( 'data-loader-loaded', true );

                var that = this;

                // set this first timeout for some false lag,
                // so it hangs at 100% for a small amount of time
                // default is 250 milliseconds
                //setTimeout( function () {
                    setCSS( that.loaderModal, { 'opacity': '0' });

                    setTimeout( function () {
                        // set display to none in case .remove() doesn't work
                        setCSS( that.loaderModal, { 'display': 'none' });

                        // try removing the element
                        if ( that.loaderModal.remove )
                            that.loaderModal.remove();
                    }, 500 );
                //}, 250 );
            }
        }
    };

    window.zodd = _zodd;

})( window, undefined );
