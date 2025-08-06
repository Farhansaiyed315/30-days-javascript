let products = {
  data: [
    {
      productName: "Regular white t shirt",
      category: "Top wear",
      price: "149",
      image: "white-shirt.jpg",
    },
    {
      productName: "Short skirt",
      category: "Bottom wear",
      price: "149",
      image: "short-skirt.jpg",
    },
    {
      productName: "Pants",
      category: "Bottom wear",
      price: "149",
      image: "pants.jpg",
    },
    {
      productName: "Jacket",
      category: "Jacket",
      price: "349",
      image: "jacket.jpg",
    },
    {
      productName: "Watch",
      category: "Accessories",
      price: "549",
      image: "watch.jpg",
    },
  ]
};


for (let i of products.data) {
  // Create card
  let card = document.createElement("div");
  card.classList.add("card", i.category.toLowerCase().replace(" ", "-"));

  // Image container
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // Image
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);

  // Add image container to card
  card.appendChild(imgContainer);

  // Product Name
  let name = document.createElement("h3");
  name.innerText = i.productName;
  card.appendChild(name);

  // Price
  let price = document.createElement("p");
  price.innerText = "₹" + i.price;
  card.appendChild(price);

  // Add card to main products container
  document.getElementById("products").appendChild(card);
}
