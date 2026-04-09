const products = [
  {
    id: 1,
    name: 'Premium Dog Food',
    price: 899,
    image: 'images/dog-food.jpg'
  },
  {
    id: 2,
    name: 'Cat Food Pack',
    price: 699,
    image: 'images/cat-food.jpg'
  },
  {
    id: 3,
    name: 'Pet Toy',
    price: 399,
    image: 'images/toy.jpg'
  },
  {
    id: 4,
    name: 'Luxury Pet Bed',
    price: 1499,
    image: 'images/pet-bed.jpg'
  }
];

const productContainer = document.getElementById('productContainer');

products.forEach(product => {
  productContainer.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card p-3 shadow product-card">
        <img src="${product.image}" class="card-img-top">
        <div class="card-body text-center">
          <h5>${product.name}</h5>
          <p class="fw-bold">₹${product.price}</p>
          <button class="btn btn-warning" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
});

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const selectedProduct = products.find(product => product.id === id);

  cart.push(selectedProduct);
  localStorage.setItem('cart', JSON.stringify(cart));

  alert('Product Added to Cart');
}