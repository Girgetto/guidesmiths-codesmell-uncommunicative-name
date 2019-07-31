
//Use meaningful and pronounceable variable names
const yyyymmdstr = moment().format("YYYY/MM/DD");

//Use the same vocabulary for the same type of variable
getUserInfo();
getClientData();
getCustomerRecord();

//Use searchable names
setTimeout(blastOff, 86400000); // What the heck is 86400000 for?

//Use explanatory variables
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);

//Avoid Mental Mapping
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Wait, what is `l` for again?
  dispatch(l);
});

const p = (a,b) => Math.sqrt(a**2 + b**2);

const f = n => [...Array(n)].reduce((a, _, i) => a.concat(i > 1 ? a[i - 1] + a[i - 2] : i),[]);

class Calculator {
    constructor(v){
        this.v = v
    }
    vat(p) {
        return p * this.v
    }
}
