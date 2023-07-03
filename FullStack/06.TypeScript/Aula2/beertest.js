fetch("https://random-data-api.com/api/beer/random_beer?size=30")
    .then(function (res) { return res.json(); })
    .then(function (beers) {
    var beerListElement = document.querySelector(".beer-list");
    beerListElement.innerHTML = beers
        .map(function (beer) {
        if (+beer.alcohol.replace("%", "") < 7) {
            return "<h3>O Francisco gosta de ".concat(beer.name, " que tem ").concat(beer.alcohol, ".</h3>");
        }
        else {
            return "<h3>O Rodolfo \u00E9 forte, por \n        isso gosta de ".concat(beer.name, " que tem ").concat(beer.alcohol, ".</h3>");
        }
    })
        .join("");
});
