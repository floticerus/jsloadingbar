/** @preserve zoddjs v0.0.2 - a tiny loading bar for modernizr/yepnope
  * copyright 2014 kevin von flotow - vonflow@gmail.com
  * https://github.com/kvonflotow/zoddjs
  * MIT license
  */
( function ( window, undefined ) {
    var yep = window.Modernizr && window.Modernizr.load ? window.Modernizr.load : window.yepnope ? window.yepnope : undefined;

    if ( !yep )
        return console.error( 'zodd: modernizr or yepnope is required' );

    // make some shortcuts
    var doc = window.document,
        docElement = doc.documentElement;

    function setCSS( elem, obj ) {
        for ( var key in obj )
            // set style directly instead of setProperty so we don't need a polyfill
            elem.style[ key ] = obj[ key ];
    }

    function isString( str ) {
        return typeof( str ) === 'string' || str instanceof String
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

        this.setDefaultOpts();

        this.loaderModal = doc.createElement( 'div' );
        this.loadingBar = doc.createElement( 'div' );

        this.loadPercent = 0;
        this.loaded = 0;
        this.count = this.arr.length;

        this.init();
    }

    _zodd.prototype = {
        setDefaultOpts: function () {
            // scrollDuration sets how long the default css transition
            // takes to finish for each loadingBar update
            // if css transitions for loadingBar are removed this does nothing

            // since 0 should be a valid option do a type check instead of a truthy check
            this.opts.scrollDuration = typeof this.opts.scrollDuration !== 'undefined' ? this.opts.scrollDuration : 0.33;

            this.opts.targetElement = this.opts.targetElement || ( function () {
                var bodies = doc.getElementsByTagName( 'body' );

                return bodies.length !== 0 ? bodies[ 0 ] : undefined;
            })();

            this.opts.css = this.opts.css || {};

            this.opts.css.modal = extend({
                'background-color': 'rgb( 233, 233, 233 )',
                'position': 'fixed',
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

            this.count = this.arr.length;

            setCSS( this.loaderModal, this.opts.css.modal );

            setCSS( loadingBarWrapper, this.opts.css.loadingBarWrapper );

            this.loadingBar = doc.createElement( 'div' );

            setCSS( this.loadingBar, this.opts.css.loadingBar );

            loadingBarWrapper.appendChild( this.loadingBar );

            this.loaderModal.appendChild( loadingBarWrapper );

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

                    var tempComplete = tempObj.hasOwnProperty( 'complete' ) ? tempObj.complete : undefined;

                    // this is broken - tempComplete is redefined as undefined by the time it fires. doh
                    tempObj.complete = function () {
                        if ( tempComplete )
                            tempComplete();

                        that.addOneToLoaded.call( that );
                    };

                    ret.push( tempObj );
                }

                return ret;
            })() );
        },

        addOneToLoaded: function () {
            this.loadPercent = ( ( ( this.loaded += 1 / this.count ) * 100 ) + 0.5 ) | 0;

            if ( this.loaderModal ) {
                setCSS( this.loadingBar, { 'width': this.loadPercent + '%' });

                if ( this.loadPercent === 100 ) {
                    this.opts.targetElement.setAttribute( 'data-loader-loaded', true );

                    var that = this;

                    // set this first timeout for some false lag,
                    // so it hangs at 100% for a small amount of time
                    // default is 250 milliseconds
                    setTimeout( function () {
                        setCSS( that.loaderModal, { 'opacity': '0' });

                        setTimeout( function () {
                            // set display to none in case .remove() doesn't work
                            setCSS( that.loaderModal, { 'display': 'none' });

                            // try removing the element
                            if ( that.loaderModal.remove )
                                that.loaderModal.remove();
                        }, 500 );
                    }, 250 );
                }
            }
        }
    };

    window.zodd = _zodd;

})( window, undefined );
