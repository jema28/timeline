const { Pool } = require("pg");
const url = require("url");
require("dotenv").config();

let DB_URL = process.env.DB_URL;
let options = {};

if (process.env.TRAVIS === "true") {
  options = {
    database: "travis_ci_test"
  };
} else {
  if (process.env.NODE_ENV === "test") {
    DB_URL = process.env.TEST_DB_URL;
  }

  if (!DB_URL) throw new Error("Environment variable DB_URL must be set");

  const params = url.parse(DB_URL);
  const [username, password] = params.auth.split(":");

  options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    max: process.env.DB_MAX_CONNECTIONS || 2,
    user: username,
    password,
    ssl: params.hostname !== "localhost"
  };
}

module.exports = new Pool(options);
