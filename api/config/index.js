require("dotenv").config();

const config = {
  authJwtSecret: process.env.AUTH_JWT_SECRET
};

module.exports = { config: config };
