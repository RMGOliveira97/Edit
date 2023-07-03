interface Beer {
  name: string;
  alcohol: string;
}

fetch("https://random-data-api.com/api/beer/random_beer?size=30")
  .then((res) => res.json())
  .then((beers: Beer[]) => {
    const beerListElement = document.querySelector(".beer-list") as HTMLElement;
    beerListElement.innerHTML = beers
      .map((beer) => {
        if (+beer.alcohol.replace("%", "") < 7) {
          return `<h4>O Francisco gosta de ${beer.name} que tem ${beer.alcohol}.</h4>`;
        } else {
          return `<h4>O Rodolfo é forte, por 
        isso gosta de ${beer.name} que tem ${beer.alcohol}.</h4>`;
        }
      })
      .join("");
  });
