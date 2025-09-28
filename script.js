const productsList = document.querySelector('.products');
const nameInput = document.querySelector('#name');
const id = document.querySelector('#id');
const price = document.querySelector('#price');
const image = document.querySelector('#image');
const addBtn = document.querySelector('#add');
const deleteBtn = document.querySelector('#delete');
const updateBtn = document.querySelector('#update');

// deleteBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   const products = getProducts();
// });

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (nameInput.value && image.value && price.value) {
    const product = {
      // Usando um ID baseado no tempo para evitar colisões simples
      id: new Date().getTime(),
      title: nameInput.value,
      price: price.value,
      image: image.value,
    };
    const products = getProducts();
    products.unshift(product);
    saveProducts(products);
    renderProducts(products);
    nameInput.value = '';
    price.value = '';
    image.value = '';
  } else {
    alert('The name, price and image fields are required.');
  }
});

function renderProducts(products) {
  productsList.innerHTML = '';
  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="productCard">
    <img src="${product.image}">
    <h3>${product.title}</h3>
    <p>$ ${product.price}</p>
    <button>Buy Now</button>
    </div>  
  `;
    productsList.appendChild(li);
  });
}

function saveProducts(products) {
  localStorage.setItem('fakestore', JSON.stringify(products));
}

function getProducts() {
  const products = localStorage.getItem('fakestore');
  return products ? JSON.parse(products) : [];
}

function fetchProducts() {
  let products = localStorage.getItem('fakestore');
  if (products) {
    renderProducts(JSON.parse(products));
    return;
  } else {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        products = data.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        }));
        saveProducts(products);
        renderProducts(products);
      })
      .catch((error) => {
        console.error('Ocorreu um erro:', error);
      });
  }
}

window.onload = fetchProducts;
