import products from "./productsModel.js";
const cart = {
    items: [],
    onCartChange: null,
    // Function to add a product to the cart
    addToCart(productId) {
      // Check if the product is already in the cart
      const existingItem = this.items.find((item) => item.productId === productId);
  
      if (existingItem) {
        // If the product is already in the cart, increase its quantity
        existingItem.quantity++;
      } else {
        // If the product is not in the cart, add it as a new item
        this.items.push({ productId, quantity: 1 });
      }
  
      if (this.onCartChange) {
        this.onCartChange();
      }
  
      // Save the cart to localStorage
      this.saveCart();
    },
  
    // Function to remove a product from the cart
    removeFromCart(productId) {
      // Find the index of the item with the specified productId
      const index = this.items.findIndex((item) => item.productId === productId);
  
      if (index !== -1) {
        // Decrease the quantity by 1 if it's greater than 1
        if (this.items[index].quantity > 1) {
          this.items[index].quantity--;
        } else {
          // Remove the item from the cart if the quantity is 1 or less
          this.items.splice(index, 1);
        }
    
        if (this.onCartChange) {
          this.onCartChange();
        }
        // Save the cart to localStorage
        this.saveCart();
      }
    },
    getTotalItemCount() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
    isProductInCart(productId) {
      const abc = this.items.some((item) => item.productId === productId);
      return abc;
    },
  
    // Get the item count for a product with a specific ID
    getItemCount(productId) {
      const item = this.items.find((item) => item.productId === productId);
      return item ? item.quantity : 0;
    },
    // Function to save the cart to localStorage
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },
  
    // Function to load the cart from localStorage
    loadCart() {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        this.items = JSON.parse(cartData);
      }
    },

    getTotalPrice() {
        let total = 0;
        for (const item of this.items) {
          const product = products.find((p) => p.id === item.productId);
          if (product) {
            total += product.price * item.quantity;
          }
        }
        return total;
      },
  };


  export default cart