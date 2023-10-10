class ProductComponent extends HTMLElement {
    constructor(cart) {
      super();

      this.cart = cart;
  
      // Create a shadow DOM
      this.attachShadow({ mode: 'open' });

  
      // Define the template
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Add CSS styles for the product component */
          .product {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            max-width: 300px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          }
          .product img {
            max-width: 100%;
            height: auto;
          }
          .product h2 {
            font-size: 1.2rem;
            margin: 0;
          }
          .product p {
            font-size: 1rem;
          }
        </style>
        <div class="product">
          <img alt="">
          <h2></h2>
          <p></p>
          <p>Price: $<span></span></p>
        </div>
      `;
  
      // Clone the template content and attach it to the shadow DOM
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    set product(product) {
      // Set the product data in the component
      const productElement = this.shadowRoot.querySelector('.product');
      if (product) {
        console.log(product.id);
        productElement.querySelector('img').src = product.imageLink;
        productElement.querySelector('img').alt = product.name;
        productElement.querySelector('h2').textContent = product.name;
        productElement.querySelector('p').textContent = product.description;
        productElement.querySelector('span').textContent = product.price.toFixed(2);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => this.addToCart(product));
        productElement.appendChild(addToCartButton);
      }
    }

    addToCart(product) {
        if (product) {
          console.log(product.id);
          // Call the addToCart function of your cart object and pass the product's ID
          this.cart.addToCart(product.id);
          alert('Item added to cart.'); // You can customize this notification
        } else {
          console.error('Product is not defined.');
        }
      }


  }
  
  export default ProductComponent