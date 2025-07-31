document.getElementById("shippingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const type = document.getElementById("type").value;

  let cost = 0;
  if (type === "standard") {
    cost = weight * 5;
  } else if (type === "express") {
    cost = weight * 10;
  }

  document.getElementById("result").textContent = `Shipping Cost: ₹${cost.toFixed(2)}`;
});
