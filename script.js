let total = 0;

function addToCart(name, price) {
    let cartItems = document.getElementById("cartItems");

    let li = document.createElement("li");
    li.textContent = `${name} - ₹${price}`;

    cartItems.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}
