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
          .buttons {
            display: flex;
            align-items: center;
          }
          .quantity {
            display: flex;
            align-items: center;
            margin-right: 10px;
          }
        </style>
        <div class="product">
          <img alt="">
          <h2></h2>
          <p></p>
          <p>Price: $<span></span></p>
          <button class="add-to-cart">Add to Cart</button>
            <div class="cart-controls" style="display: none;">
                <button class="decrement">-</button>
                <span class="item-count">0</span>
                <button class="increment">+</button>
            </div>
        </div>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.addToCartButton = this.shadowRoot.querySelector('.add-to-cart');
        this.cartControls = this.shadowRoot.querySelector('.cart-controls');
        this.decrementButton = this.shadowRoot.querySelector('.decrement');
        this.itemCountSpan = this.shadowRoot.querySelector('.item-count');
        this.incrementButton = this.shadowRoot.querySelector('.increment');
    
    }
  
    set product(product) {
      // Set the product data in the component
      const productElement = this.shadowRoot.querySelector('.product');
      console.log(product);
      if (product) {

        productElement.querySelector('img').src = product.imageLink;
        productElement.querySelector('img').alt = product.name;
        productElement.querySelector('h2').textContent = product.name;
        productElement.querySelector('p').textContent = product.description;
        productElement.querySelector('span').textContent = product.price.toFixed(2);
      }
      const isInCart = this.cart.isProductInCart(product.id);
      console.log(isInCart);
      this.updateUI(isInCart, isInCart ? this.cart.getProductQuantity(product.id) : 0);

      // Add event listeners to the buttons
      this.addToCartButton.addEventListener('click', () => this.addToCart(product));
      this.decrementButton.addEventListener('click', () => this.decrement(product));
      this.incrementButton.addEventListener('click', () => this.increment(product));
    }

    addToCart(product) {
        this.cart.addToCart(product.id);
        this.updateUI(true, 1);
    }

    decrement(product) {
        const quantity = this.cart.getProductQuantity(product.id);
        if (quantity > 1) {
          this.cart.decrementProduct(product.id);
          this.updateUI(true, quantity - 1);
        } else {
          this.cart.removeFromCart(product.id);
          this.updateUI(false, 0);
        }
      }
    
      increment(product) {
        const quantity = this.cart.getProductQuantity(product.id);
        this.cart.addToCart(product.id);
        this.updateUI(true, quantity + 1);
      }

      updateUI(isInCart, quantity) {
        if (isInCart) {
          this.addToCartButton.style.display = 'none';
          this.cartControls.style.display = 'block';
          this.itemCountSpan.textContent = quantity;
        } else {
          this.addToCartButton.style.display = 'block';
          this.cartControls.style.display = 'none';
        }
      }



  }
  
  export default ProductComponent