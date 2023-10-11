class ProductShowModal extends HTMLElement {
    constructor(product) {
      super();
        this.product = product
      // Create a shadow DOM for the modal
      this.attachShadow({ mode: 'open' });
  
      // Define the template for the modal
      this.shadowRoot.innerHTML = `
        <style>
          /* Add CSS styles for the modal */
          .product-show-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
          .modal-content {
            background: white;
            width: 60vw;
            height: 80vh;
            border-radius: 10px;
            padding: 20px;
            overflow-y: scroll;
          }
          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
          }
          .product-details {
            text-align: center;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        </style>
        <div class="product-show-modal" id="product-show-modal">
          <div class="modal-content">
            <button class="close-button" id="close-button">&times;</button>
            <div class="product-details">
                <div class="product-image">
                    <img alt="" src=""/>
                </div>
                <div class="product-name"></div>
                <button class="addBtn">Add To Cart</button>
                <div class="btn_group hidden">
                    <button class="decrement">-</button>
                    <span class="item_count">0</span>
                    <button class="increment">+</button>
                </div>
                <div class="product-price"></div>
                <div class="product-categoriy"></div>
                <div class="product-unit"></div>
            </div>
          </div>
        </div>
      `;
  
      // Get the modal elements
      this.modal = this.shadowRoot.querySelector('.product-show-modal');
      this.closeButton = this.shadowRoot.querySelector('.close-button');
  
      // Add an event listener to close the modal when the close button is clicked
      this.closeButton.addEventListener('click', () => this.closeModal());
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.product-image').setAttribute("src", this.product.imageLink)
        this.shadowRoot.querySelector('.product-name').textContent = this.product.name
        this.shadowRoot.querySelector('.product-price').textContent = this.product.price
        this.shadowRoot.querySelector('.product-category').textContent = this.product.category
        this.shadowRoot.querySelector('.product-unit').textContent = this.product.unit

    }
  
    // Function to open the modal and display product details
    openModal() {
      this.modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  
    // Function to close the modal
    closeModal() {
      this.modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Allow background scrolling
    }
  }
  
  export default ProductShowModal
  