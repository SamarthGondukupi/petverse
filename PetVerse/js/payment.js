const paymentMethod = document.getElementById('paymentMethod');
const paymentDetails = document.getElementById('paymentDetails');

paymentMethod.addEventListener('change', function() {
  const method = paymentMethod.value;

  if (method === 'upi') {
    paymentDetails.innerHTML = `
      <input type="text" class="form-control mb-3" placeholder="Enter UPI ID" required>
    `;
  }

  else if (method === 'qr') {
    paymentDetails.innerHTML = `
      <div class="text-center mb-3">
        <img src="images/qr-code.png" alt="QR Code" class="img-fluid rounded" style="max-width: 220px;">
        <p class="mt-2">Scan this QR Code to pay</p>
      </div>
    `;
  }

  else if (method === 'credit' || method === 'debit') {
    paymentDetails.innerHTML = `
      <input type="text" class="form-control mb-3" placeholder="Card Holder Name" required>
      <input type="text" class="form-control mb-3" placeholder="Card Number" required>
      <div class="row">
        <div class="col-md-6">
          <input type="text" class="form-control mb-3" placeholder="MM/YY" required>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control mb-3" placeholder="CVV" required>
        </div>
      </div>
    `;
  }

  else if (method === 'cod') {
    paymentDetails.innerHTML = `
      <div class="alert alert-success">
        Cash on Delivery selected. Please keep the exact amount ready.
      </div>
    `;
  }

  else {
    paymentDetails.innerHTML = '';
  }
});

document.getElementById('paymentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  alert('Payment Successful');
  window.location.href = 'success.html';
});