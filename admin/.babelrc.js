const env = require("./config/setup");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env]]
};
