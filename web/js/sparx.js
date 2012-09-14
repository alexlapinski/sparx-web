/*global */

(function () {

	"use strict";

	var Sparx = function () {

		var _fleetlyApi = new Fleetly("2IC6TNJI90IO3ADA");
		_fleetlyApi.authenticate("file:///Users/alexanderla/Code/sparx-web/index.html");

	};

	$(document).ready(function(){
		window.Sparx = new Sparx();
	});
}());