const portugal = {
    name: "Portugal",
    capital: "Lisboa",
    population: 10310000,
    minimunSalary: 760,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  };

  const france = {
    name: "France",
    capital: "Paris",
    population: 67390000,
    minimunSalary: 1539,
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
  };
 
  const germany = {
    name: "Germany",
    capital: "Berlin",
    population: 83240000,
    minimunSalary: 1584,
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  };



  function countryDetails(country){
    document.querySelector(".name-value-js").textContent = country.name;
    document.querySelector(".capital-value-js").textContent = country.capital;
    document.querySelector(".population-value-js").textContent = country.population;
    document.querySelector("img").setAttribute("src", country.flag);    
  }

  document.querySelector(".portugal-js").addEventListener("click", () => {
    countryDetails(portugal);
  })

  document.querySelector(".france-js").addEventListener("click", () => {
    countryDetails(france);
  })

  document.querySelector(".germany-js").addEventListener("click", () => {
    countryDetails(germany);
  })
  
  