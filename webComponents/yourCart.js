class CartButtonComponent extends HTMLElement {
    constructor(cart) {
      super();
      this.cart = cart;
      this.attachShadow({ mode: 'open' });
  
      // Define the template for the cart button
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Add CSS styles for the cart button */
          .cart-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
          }
        </style>
        <button class="cart-button">Your Cart (0)</button>
      `;
  
      // Clone the template content and attach it to the shadow DOM
      this.shadowRoot.appendChild(template.content.cloneNode(true));
  
      // Update the button content with the total number of items in the cart
      this.updateCartCount();
  
      // Listen for changes in the cart and update the button content
      this.cart.observeCart(() => {
        this.updateCartCount();
      });
    }
  
    // Function to update the cart button content
    updateCartCount() {
      const buttonElement = this.shadowRoot.querySelector('.cart-button');
      const totalCount = this.cart.getTotalItemCount();
      buttonElement.textContent = `Your Cart (${totalCount})`;
    }
  }
  
export default CartButtonComponent
  