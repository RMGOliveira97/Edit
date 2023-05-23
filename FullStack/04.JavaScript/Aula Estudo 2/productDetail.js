const product = {
  name: "iPad APPLE (10.2'' - 64 GB - Wi-Fi - Cinzento Sideral)",
  id: 7461656,
  price: 399.99,
  description:
    "Com o processador A13 Bionic, tudo é feito com maior rapidez e fluidez: trocar mensagens, navegar na internet ou usar várias apps ao mesmo tempo. Um aumento de 20% da velocidade da GPU oferece o desempenho gráfico de que precisa e torna o iPad perfeito para jogos e outras experiências envolventes. Um Neural Engine mais potente permite-lhe usar funcionalidades de aprendizagem automática no iPadOS 15, como o Texto detetável. O processador A13 Bionic tem capacidade mais do que suficiente para executar apps avançadas, como o Procreate e as suas aguarelas incrivelmente realistas. Com bateria para todo o dia, o iPad está pronto para acompanhar o seu ritmo.",
  image: "https://www.worten.pt/i/c08feb7e3d390b41436d07808321e2fbc3589d1b.jpg",
};

document.querySelector(".product-image-js").setAttribute("src", product.image);
document.querySelector(".product-name-js").textContent = product.name;
document.querySelector(".product-id-js").textContent = product.id;
document.querySelector(".product-price-js").textContent = product.pricerice;
document.querySelector(".product-description-js").textContent =
  product.description;

function addToCart () {
  const element = document.createElement("p");
  element.textContent = `${product.name} / ${product.price}`
  document.querySelector(".cart-js").appendChild(element);
}