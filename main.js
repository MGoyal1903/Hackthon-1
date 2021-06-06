
const fs = require('fs');
const fetch = require('node-fetch');
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
let date = dd + "%2F" + mm + "%2F" + yyyy;
let pin = "110085";
let url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pin + "&date=" + date;

data(url)


async function data(url) {
    let response = await fetch(url);
    let jsondata = await response.json();
    // console.log(jsondata);
    let dataobj = jsondata.sessions;

    let centers = [];
    for (let i = 0; i < dataobj.length; i++) {
        centers.push(dataobj[i]);
    }
    getdata(centers);


    function getdata(centers) {

        let data = JSON.stringify(centers);

        // write JSON string to a file
        fs.writeFileSync('centers.json', data + "\n", (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });

    }

}
module.exports.pin = pin;



