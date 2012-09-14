class FleetlyAPI(clientId):

	_clientId = clientId

	def getAuthenticationUrl(self, redirectUri):
		return "https://www.fleetly.com/api/v1/authenticate/?client_id=" + self._clientId + "&response_type=code&redirect_uri=" + redirectUri
