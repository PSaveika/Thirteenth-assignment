//Pirma užduotis
console.log("-----------------------------------------------\n")
console.log("Pirma užduotis\n")
console.log("-----------------------------------------------")


var commodityPrice = 0;
var deliveryPrice = 2;
var withDelivery = 0;
var whileNotNumber = false;
var whileNotCharacter = false;
var RegularExpression = /^[0-9]*\.?[0-9]*$/;
var charExpression = /^[A-Za-z]+$/;
var delivery = true;
var city;

//number check
while(!whileNotNumber) {
    commodityPrice = prompt("Įveskite prekės kainą: ");
    if(commodityPrice.match(RegularExpression)) {
        commodityPrice = +commodityPrice;
        
        if (commodityPrice <= 0) {
            console.log("Įvestas skaicius negali būti mažesnis arba lygus nuliui. Įveskite kainą iš naujo! ");
        } else {
            whileNotNumber = true;
        }
        
    } else {
        console.log("Ivesta reikšmė naudoja neleistinus simbolius. Bandykite dar kartą!");
    }
}

if(confirm("Ar reikalingas pristatymas į namus?")){
    //true
    delivery = true;
} else {
    //false
    delivery = false;
}

commodityPrice = parseFloat(commodityPrice);
deliveryPrice = parseFloat(deliveryPrice);
withDelivery = commodityPrice+deliveryPrice;

if(delivery == false) {
    //pirmas variantas - no delivery
    console.log("Prekės kaina: " + commodityPrice.toFixed(2) + " €\nPrekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
} else {
    //antras variantas + delivery
    //character check
    while(!whileNotCharacter) {
        city = prompt("Į kurį miestą reiks pristatyti?");
        if(city.match(charExpression)) {
            whileNotCharacter = true;   
        } else {
            console.log("Ivesta reikšmė naudoja neleistinus simbolius. Bandykite dar kartą!")
        }
    }
    console.log("Prekės kaina: " + commodityPrice.toFixed(2) + " €");
    console.log("Pristatymas: " + deliveryPrice.toFixed(2) + " €");
    console.log("Iš viso: " + withDelivery.toFixed(2) + " €");
    console.log(`Prekę pristatysime į ${city} per 1-3 dienas.`);
}

console.log("-----------------------------------------------")
console.log("-----------------------------------------------\n")
console.log("Antra užduotis\n")
console.log("-----------------------------------------------")

//Antra užduotis

var areaPerPerson;

var cityArray = [
    {
        cityName: "South Korea",
        stateArea: 100363,
        populationNumber: 51745000
    },
    {
        cityName: "Japan",
        stateArea: 377975,
        populationNumber: 126226568
    },
    {
        cityName: "Thailand",
        stateArea: 513120,
        populationNumber: 66171439
    },
    {
        cityName: "Malaysia",
        stateArea: 330803,
        populationNumber: 32447385
    },
    {
        cityName: "Mongolia",
        stateArea: 1564116,
        populationNumber: 3353470
    }
]

for(var x of cityArray){
        areaPerPerson = x.stateArea*1000000/x.populationNumber;
        var formattedArea = x.stateArea.toLocaleString('en-US')
        console.log(`Šalis: ${x.cityName}, joje gyvena: ${(x.populationNumber / 1000000).toFixed(2)} mln. gyventojų.`)
        console.log(`Valstybės plotas: ${formattedArea} km², plotas tenkantis vienam gyventojui: ${areaPerPerson.toFixed(2)} m²`)
        console.log("-----------------------------------------------")
    }


