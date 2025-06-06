
function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('active');
}
function addToCart() {
  document.getElementById('cartPanel').classList.add('active');
}
function confirmOrder() {
  document.getElementById('overlay').classList.add('active');
  document.getElementById('formPanel').classList.add('active');
}
function showPayment() {
  document.getElementById('formPanel').classList.remove('active');
  document.getElementById('paymentPanel').classList.add('active');
}
function submitOrder() {
  alert("Order Submitted!");
  document.getElementById('overlay').classList.remove('active');
  document.getElementById('paymentPanel').classList.remove('active');
  document.getElementById('cartPanel').classList.remove('active');
}
function increaseQty() {
  let qty = document.getElementById('qty');
  qty.textContent = parseInt(qty.textContent) + 1;
}
function decreaseQty() {
  let qty = document.getElementById('qty');
  if (parseInt(qty.textContent) > 1)
    qty.textContent = parseInt(qty.textContent) - 1;
}
