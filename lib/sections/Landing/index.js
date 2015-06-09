'use strict';
var fs = require( 'fs' );



var model = require( '../../model' );


function Landing() {}


Landing.prototype = {

	init: function( req, done ) {
		
		
	},

  resize: function(w,h) {

  },

	animateIn: function( req, done ) {

		done();
    
	},

	animateOut: function( req, done ) {

		done();
	},

	destroy: function( req, done ) {

		
    

		done();
	}
};

module.exports = Landing;
