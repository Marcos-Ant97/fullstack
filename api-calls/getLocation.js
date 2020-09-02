var geoip = require('geoip-lite');
const fetch = require("node-fetch");

async function getUserLocation() {
    await fetch("https://api.myip.com", {
            method: 'get'
        })
            .then(function (response) {
                response.text()
                    .then(function (result) {
                        let ip = JSON.parse(result).ip
                        console.log(geoip.lookup(ip).ll)
                        return geoip.lookup(ip);
                    })
            })
            .catch(function (err) { 
                console.error(err); 
                return "error"
            });
}

module.exports = getUserLocation