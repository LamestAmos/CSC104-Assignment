let dummyShop = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `Product ${1 + i}`,
  price: 2.99 + i,
  added: false,
}));

const products = [...document.querySelectorAll(".product")];
const cart = document.querySelector("#cart");

products.forEach((product, i) =>
  product.querySelector("button").addEventListener("click", () => {
    dummyShop = dummyShop.map((s) => {
      if (s.id !== i + 1) return s;
      s.added = true;
      return s;
    });
    updateCart();
  }),
);

cart.querySelector(".content").addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
});

function updateCart() {
  const addedItems = dummyShop.filter((s) => s.added);
  cart.querySelector(".cart-quantity").textContent = addedItems.length;
  const cartItems = addedItems.map((item) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = item.name;

    const itemPriceTag = document.createElement("h4");
    itemPriceTag.textContent = item.price;

    const textContainer = document.createElement("div");
    textContainer.append(itemTitle, itemPriceTag);

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";

    div.append(textContainer, removeButton);

    return div;
  });

  cart.querySelector(".content").replaceChildren(...cartItems);
}
