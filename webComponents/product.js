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
          cursor: pointer;
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
        .btn_group {
          width: 80px;
          display:flex;
          justify-content: space-between;
        }
        .hidden {
          display: none;
        }
      </style>
      <div class="product">
        <img alt="">
        <h2></h2>
        <p></p>
        <p>Price: $<span></span></p>
        <button class="addBtn">Add To Cart</button>
        <div class="btn_group hidden">
          <button class="decrement">-</button>
          <span class="item_count">0</span>
          <button class="increment">+</button>
        </div>
      </div>
    `;

    // Clone the template content and attach it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.addButton = this.shadowRoot.querySelector('.addBtn');
    this.btnGroup = this.shadowRoot.querySelector('.btn_group');
    this.itemCount = this.shadowRoot.querySelector('.item_count');
    this.incrementButton = this.shadowRoot.querySelector('.increment');
    this.decrementButton = this.shadowRoot.querySelector('.decrement');

    this.addButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.addToCart()
      
    });
    this.incrementButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.addToCart()
      
    });
    this.decrementButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.decrementItem()
      
    });
  }

  set product(product) { // Fix the method name here
    // Set the product data in the component
    this._product = product
    const productElement = this.shadowRoot.querySelector('.product');
    if (product) {
      productElement.querySelector('img').src = product.imageLink; // Fix this line
      productElement.querySelector('img').alt = product.name;
      productElement.querySelector('h2').textContent = product.name;
      productElement.querySelector('p').textContent = product.description;
      productElement.querySelector('span').textContent = parseFloat(product.price).toFixed(2);
      productElement.addEventListener('click', () => {this.navigateToProductPage()});
    }
  }

  

  connectedCallback() {
    // Check if the product is in the cart and update the UI
    if (this._product && this.cart.isProductInCart(this._product.id)) {
      this.showItemCounter();
    }
    
  }
  navigateToProductPage() {
      // Ensure the product data is available
      if (this._product) {
        // Construct the URL for product.html with query parameters
        const productUrl = `product.html?productId=${this._product.id}`;

        
        // Redirect the user to the new page
        window.location.href = productUrl;
      }
    }
  addToCart() {
    if (this._product) {
      this.cart.addToCart(this._product.id);
      this.showItemCounter();
    }
  }


  decrementItem() {
    if (this._product) {
      this.cart.removeFromCart(this._product.id);
      this.showItemCounter();
    }
  }

  showItemCounter() {
    if (this._product) {
      this.addButton.classList.add('hidden');
      this.btnGroup.classList.remove('hidden');
      this.currentItemInCart = this.cart.getItemCount(this._product.id);
      this.itemCount.textContent = this.currentItemInCart
      if(!this.currentItemInCart){
        this.hideItemCounter();
      }
    }
  }
  hideItemCounter(){
    if (this._product) {
      this.addButton.classList.remove('hidden');
      this.btnGroup.classList.add('hidden');
    }
  }
}

export default ProductComponent;
