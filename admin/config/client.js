const config = {
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifyRedirectUri: process.env.SPOTIFY_REDIRECT_URI,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENT_ID,
  auth0ApiAudience: process.env.AUTH0_API_AUDIENCE,
  auth0RedirectUri: process.env.AUTH0_REDIRECT_URI
};

module.exports = { config };
