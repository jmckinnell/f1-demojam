'use strict';
var fs = require( 'fs' );



var model = require( '../../model' );


function Preloader(onComplete) {
  this.preloaded = onComplete;
}


Preloader.prototype = {

	init: function( req, done ) {
		
		
	},

  resize: function(w,h) {

  },

	animateIn: function( req, done ) {

		done();
    
    this.preloaded();
    
	},

	animateOut: function( req, done ) {

		done();
	},

	destroy: function( req, done ) {

		
    

		done();
	}
};

module.exports = Preloader;
