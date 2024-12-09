const form = document.getElementById('product-form');
const tableBody = document.getElementById('product-table-body');
const totalElement = document.querySelector('.total');
let totalAmount = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const productId = form['product-id'].value;
  const productName = form['product-name'].value;
  const productPrice = parseFloat(form['product-price'].value);

  tableBody.insertAdjacentHTML('beforeend', `<tr><td>${productId}</td><td>${productName}</td><td>Rs ${productPrice}</td></tr>`);

  totalAmount += productPrice;
  totalElement.textContent = `Total amount: Rs ${totalAmount}-/`;

  form.reset();
});