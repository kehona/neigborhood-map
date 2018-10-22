const request = require("request");

let CLIENT_ID = "1JJJHSOT4I1D5FNH5YCGUTPSE0DVFH4Q4CVKXUD4TJQ5QQCB";
let CLIENT_SECRET = "URJG2NG3NW2SPUDPXDBSONB0POIYPXKD4RG1DGHHSVA4QL1O";
let loc = "36.312553,-94.263186";
// // let loc = "36.312553%2C-94.263186";
// // console.log("HELLO");
// fetch("https://api.foursquare.com/v2/venues/explore", {
//   method: "GET",
//   mode: "no-cors",
//   headers: {
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET,
//     ll: loc,
//     query: "Wifi",
//     v: "20180323"
//   }
// })
//   .then(resp => resp.json())
//   .then(result => console.log(result))
//   .catch(function(err) {
//     // Code for handling errors
//     console.log(err);
//   });

module.exports = function getMapData() {
  return new Promise((resolve, reject) => {
    request(
      {
        url: "https://api.foursquare.com/v2/venues/explore",
        method: "GET",
        qs: {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          ll: loc,
          query: "Wifi",
          v: "20180323"
          // limit: 1
        }
      },
      function(err, res, body) {
        if (err) {
          console.error(err);
        } else {
          let jsonRespnse = JSON.parse(body);
          resolve(jsonRespnse.response.groups[0].items);
        }
      }
    );
  });
};

function mapData() {
  getMapData().then(res => console.log(res));
}
