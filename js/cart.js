const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

let total = 0;

cart.forEach((item, index) => {
  total += item.price;

  cartItems.innerHTML += `
    <div class="card p-3 mb-3 shadow-sm">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h5>${item.name}</h5>
          <p>₹${item.price}</p>
        </div>
        <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
      </div>
    </div>
  `;
});

cartTotal.innerText = total;

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}