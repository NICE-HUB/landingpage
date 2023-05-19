// Get a reference to the product cards container
const productCardsContainer = document.querySelector('.product-cards');

// Simulate loading product data from an API
const products = [
  { name: 'saulmate', price: 1.99 },
  { name: 'Bestie', price:0.99},
  { name: 'Wild Flower', price: 29.99},
];

// Generate product card HTML dynamically
const generateProductCard = (product) => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  
  const name = document.createElement('h4');
  name.textContent = product.name;
  card.appendChild(name);
  
  const price = document.createElement('p');
  price.textContent = `$${product.price}`;
  card.appendChild(price);
  
  return card;
};

// Render product cards
const renderProductCards = () => {
  products.forEach((product) => {
    const card = generateProductCard(product);
    productCardsContainer.appendChild(card);
  });
};

// Call the renderProductCards function to display the product cards
renderProductCards();
