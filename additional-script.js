//Papildomai

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

var button = document.querySelector('.btn');
var jsDiv = document.querySelector(".js-text");


function funkcija() {
    alert("Antras script failas, tam, kad jeigu pirmoji užduotis cancel'inama, tai tam, kad suveiktų mygtuko funkcija");
    for(var x of cityArray) {
        let pElem = document.createElement("p");
        areaPerPerson = x.stateArea*1000000/x.populationNumber;
        var formattedArea = x.stateArea.toLocaleString('en-US')
        pElem.innerText = `Šalis: ${x.cityName}, joje gyvena: ${(x.populationNumber / 1000000).toFixed(2)} mln. gyventojų.\nValstybės plotas: ${formattedArea} km², plotas tenkantis vienam gyventojui: ${areaPerPerson.toFixed(2)} m²\n-----------------------------------------------\n`;
        jsDiv.appendChild(pElem);
    }
    button.disabled = true;
}