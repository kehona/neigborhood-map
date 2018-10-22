let CLIENT_ID = "1JJJHSOT4I1D5FNH5YCGUTPSE0DVFH4Q4CVKXUD4TJQ5QQCB";
let CLIENT_SECRET = "URJG2NG3NW2SPUDPXDBSONB0POIYPXKD4RG1DGHHSVA4QL1O";
let loc = "36.312553,-94.263186";

// console.log("HELLO");
let headers = new Headers({
  "Access-Control-Allow-Origin": "*",
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  ll: loc,
  query: "Wifi",
  v: "20180323"
});
fetch(
  `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=1&ll=${loc}&query=Wifi&radius=250`,
  {
    method: "GET"
  }
)
  .then(resp => resp.json())
  .then(result => console.log(JSON.parse(result).groups[0].items))
  .catch(function(err) {
    // Code for handling errors
    console.log(err);
  });
