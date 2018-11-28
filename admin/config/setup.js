require("dotenv").config();

const env = [
  "SPOTIFY_CLIENT_ID",
  "SPOTIFY_REDIRECT_URI",
  "AUTH0_DOMAIN",
  "AUTH0_CLIENT_ID",
  "AUTH0_API_AUDIENCE",
  "AUTH0_REDIRECT_URI"
];

function buildEnvConfig(acc, cur) {
  return { ...acc, [`process.env.${cur}`]: process.env[cur] };
}

module.exports = env.reduce(buildEnvConfig, {});
