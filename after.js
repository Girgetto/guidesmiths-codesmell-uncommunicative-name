const { log } = console;
const { sqrt, pow } = Math;

const currentDate = moment().format("YYYY/MM/DD");


getUser();


const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);


const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);


const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});


const pythagorasTheorem = (cathetus1, cathetus2) => sqrt(pow(cathetus1, 2) + (pow(cathetus2, 2)));


const fibonacci = fibonacciLength => (
    [...Array(fibonacciLength)].reduce((accumulator, _, index) => accumulator.concat(index > 1 ? accumulator[index - 1] + accumulator[index - 2] : index),[])
    );


class VATCalculator {
    constructor(vat_rate){
        this.vat_rate = vat_rate
    }
    vat(price_excluding_vat) {
        return price_excluding_vat * this.vat_rate
    }
}

const VAT = new VATCalculator(10);

log(VAT.vat(5))
log(pythagorasTheorem(5,5))
log(fibonacci(5))
