(function () {

	"use strict";

	var Fleetly = function (clientId) {

		var _clientId = clientId;

		return {

			authenticate: function(redirectURI) {
				var url = "https://www.fleetly.com/api/v1/authenticate" +
                  "?client_id="+_clientId+
                  "&redirect_uri="+redirectURI+
                  "&response_type=token";

                  window.location.href = url;
			}

		};
	};

	window.Fleetly = Fleetly;

}())