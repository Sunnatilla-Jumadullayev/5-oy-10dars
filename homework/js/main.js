const BASE_URL = `https://dummyjson.com`;
const elProduct = document.querySelector(".product__wrapper");

async function getData() {
  let query = new URLSearchParams(window.location.search);
  let id = query.get(`q`);

  let response = await fetch(`${BASE_URL}/products/${id}`);
  response.json().then((res) => getProduct(res));
}
getData();

function getProduct(data) {
  console.log(data);
  elProduct.innerHTML = `
  <div>
    <img src="${data.images[0]}" alt="${data.description}" class="product__img" />
  </div>
  <div class="product__data">
    <div class="rating">rating: ${data.rating}</div>
      <h1 class="product__name"> ${data.title}</h1>
      <p class="description">
     <i>
     ${data.description}
     </i>
  </p>
  <div class="prise">
      <p class="product__prise"> ${data.price} $$$</p>
  </div>
      <button class="buy">buy now</button>
  </div>
  `;
}
console.log(elProduct);
