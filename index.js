const { SeafileAPI } = require("./src/seafile-api");
const axios = require("axios");
require("dotenv").config();
//console.log("SeafileAPI", SeafileAPI);

const server = process.env.SEAFILE_SERVER;
const username = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;
//console.log("ENV", password, username, server);
/* 
const url = "http://seafile.uniqa.ua/api2/auth-token/";
axios
  .post(url, {
    username: username,
    password: password,
  })
  .then((response) => {
    console.log(response.data);
  }); */

const sf = new SeafileAPI({ server, username, password });
//console.log("sf", sf.login);

sf.login()
  .then((response) => {
    //console.log("login", response);
    sf.authPing()
      .then((response) => {
        console.log("seafile", response.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  })
  .catch((err) => {
    console.log("error", err.config);
  });
