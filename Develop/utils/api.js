const axios = require('axios');
const api = {
  getUser: function(user) {
    return axios.get(`https://api.github.com/users/${user}`)
  }
};

module.exports = api;