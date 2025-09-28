const productsList = document.querySelector('.products');
const nameInput = document.querySelector('#name');
const idInput = document.querySelector('#id');
const priceInput = document.querySelector('#price');
const imageInput = document.querySelector('#image');
const addBtn = document.querySelector('#add');
const deleteBtn = document.querySelector('#delete');
const updateBtn = document.querySelector('#update');

//////////////////
function clearForm() {
  idInput.value = '';
  nameInput.value = '';
  priceInput.value = '';
  imageInput.value = '';
}

//////////////////
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (nameInput.value && imageInput.value && priceInput.value) {
    const product = {
      // Usando um ID baseado no tempo para evitar conflito
      id: new Date().getTime(),
      title: nameInput.value,
      price: priceInput.value,
      image: imageInput.value,
    };
    const products = getProducts();
    products.unshift(product);
    saveProducts(products);
    renderProducts(products);
    clearForm();
  } else {
    alert('The name, price and image fields are required.');
  }
});

//////////////////
updateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const idToUpdate = parseInt(idInput.value);
  if (!idToUpdate) {
    alert('The ID field is required to update a product.');
    return;
  }
  const products = getProducts();
  const productIndex = products.findIndex(
    (product) => product.id === idToUpdate,
  );
  if (productIndex !== -1) {
    const productToUpdate = products[productIndex];
    if (nameInput.value) productToUpdate.title = nameInput.value;
    if (priceInput.value) productToUpdate.price = priceInput.value;
    if (imageInput.value) productToUpdate.image = imageInput.value;
    saveProducts(products);
    renderProducts(products);
    clearForm();
  } else {
    alert('Product not found with the given ID.');
  }
});

//////////////////
deleteBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (idInput.value) {
    const products = getProducts();
    const index = products.findIndex(
      (product) => product.id === parseInt(idInput.value),
    );
    if (index !== -1) {
      products.splice(index, 1);
      saveProducts(products);
      renderProducts(products);
      clearForm();
    } else {
      alert('Product not found.');
    }
  } else {
    alert('The ID field is required.');
  }
});

//////////////////
function renderProducts(products) {
  productsList.innerHTML = '';
  products.forEach((product) => {
    // Adicionando data-id ao li para fácil identificação
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="productCard">
    <img src="${product.image}">
    <h3>${product.title}</h3>
    <p>$ ${product.price}</p>
    <button>Buy Now</button>
    </div>  
  `;
    li.querySelector('.productCard').addEventListener('click', () => {
      idInput.value = product.id;
      nameInput.value = product.title;
      priceInput.value = product.price;
      imageInput.value = product.image;
    });
    productsList.appendChild(li);
  });
}

//////////////////
function saveProducts(products) {
  localStorage.setItem('fakestore', JSON.stringify(products));
}

//////////////////
function getProducts() {
  const products = localStorage.getItem('fakestore');
  return products ? JSON.parse(products) : [];
}

//////////////////
async function fetchProducts() {
  let products = getProducts();
  if (products.length === 0) {
    const url = 'https://fakestoreapi.com/products';
    try {
      const response = await fetch(url);
      const data = await response.json();
      products = data.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }));
      saveProducts(products);
    } catch (error) {
      console.error('Ocorreu um erro ao buscar produtos da API:', error);
      productsList.innerHTML =
        '<li>Error loading products. Please try again later.</li>';
    }
  }
  renderProducts(products);
}

window.onload = fetchProducts;
