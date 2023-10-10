import ProductComponent from "./webComponents/product.js";
import products from "./productsModel.js";
import CartButtonComponent from "./webComponents/yourCart.js";
  





var navbar = document.querySelector('.navbar')
var nav = document.querySelector('.nav')







window.addEventListener('resize', ()=>{

    updateNavbarPadding()


})






window.addEventListener('scroll', ()=>{


    var scrollY = parseInt(window.scrollY)
    
    if(scrollY < 300) {
        navbar.classList.remove('shadow')
        navbar.style.background = `rgba(190, 190, 190, 0)`
    } else if(scrollY >=300 && scrollY <= 400){
        navbar.classList.add('shadow')
        navbar.style.background = `rgba(190, 190, 190, ${ (scrollY - 300)/200})`
    } else if(scrollY >=400){
        navbar.style.background = `rgba(190, 190, 190, 0.5)`
    }


    updateNavbarPadding()

})



function updateNavbarPadding() {
    const displayWidth = window.innerWidth;
    const scrollPosition = window.scrollY;
  
    if (displayWidth > 1020) {
        const sidePadding = scrollPosition >= 400 ? 10 : Math.max(10, ((400 - scrollPosition) * 0.25));
        const topPadding = scrollPosition >= 400 ? 10 : 10 + (400 - scrollPosition) * 0.25;
        nav.style.padding = `${topPadding}px ${sidePadding}px 10px ${sidePadding}px`;
      }
      else {
        nav.style.padding = '10px';
      }
  }



  var links = document.querySelector('.navbar .links')

  var burger_menu = document.querySelector('.menu')
  burger_menu.addEventListener('click', ()=>{
    burger_menu.classList.toggle('active')
    links.classList.toggle('active')
  })



  class ActivateInView {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.onInView(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(this.element);
    }

    onInView(element) {
        element.classList.add('active');
    }
}



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
      // Remove the item from the cart if found
      this.items.splice(index, 1);
    }

    if (this.onCartChange) {
      this.onCartChange();
    }
    // Save the cart to localStorage
    this.saveCart();
  },
  getTotalItemCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  },
  isProductInCart(productId) {
    return this.items.some((item) => item.productId === productId);
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
};

cart.loadCart();



function handleStorageChange(event) {
  if (event.key === 'cart') {
    // Handle changes to the 'cart' key in localStorage
    cart.loadCart();
    // You can update the cart UI or perform other actions here
  }
}

// Add an event listener to listen for storage changes
window.addEventListener('storage', handleStorageChange);

// Call handleStorageChange initially to load the cart data
handleStorageChange({ key: 'cart' });

function updateTotalItemCount() {
  const totalItemCount = cart.getTotalItemCount();
  document.getElementById('cart-button').textContent = `Your Cart (${totalItemCount})`;
}

// Listen for changes in the cart and update the total item count accordingly
cart.onCartChange = updateTotalItemCount;

// When the page loads, update the total item count initially
updateTotalItemCount();





// const loader = document.getElementById('loader');
// const progressBar = document.getElementById('progress-bar');
// const percentage = document.getElementById('percentage');
// const images = document.querySelectorAll('img');
// let imagesLoaded = 0;

// function updateProgressBar() {
//   const progress = (imagesLoaded / images.length) * 100;
//   progressBar.style.width = `${progress}%`;
//   percentage.textContent = `${Math.round(progress)}%`;

//   if (imagesLoaded === images.length) {
//     loader.style.display = 'none';
//   }
// }

// images.forEach((img) => {
//   const tempImage = new Image();
//   tempImage.src = img.src;

//   tempImage.addEventListener('load', () => {
//     imagesLoaded++;
//     updateProgressBar();
//   });

//   tempImage.addEventListener('error', () => {
//     imagesLoaded++;
//     updateProgressBar();
//   });
// });



var fromRightToLeft_s = document.querySelectorAll('.fromRightToLeft')


fromRightToLeft_s.forEach(item=>{
    new ActivateInView(item)
})

var fromLeftToRight_s = document.querySelectorAll('.fromLeftToRight')


fromLeftToRight_s.forEach(item=>{
    new ActivateInView(item)
})

var fromDownToTop_s = document.querySelectorAll('.fromDownToTop')

fromDownToTop_s.forEach(item=>{
    new ActivateInView(item)
})



document.addEventListener("DOMContentLoaded", ()=>{

  updateNavbarPadding()



  if(window.scrollY < 300) {
      navbar.classList.remove('shadow')
      navbar.style.background = `rgb190, 190, 190, 0)`
  } else if(window.scrollY >= 400) {
      navbar.classList.add('shadow')
      navbar.style.background = `rgb190, 190, 190, 0.5)`
  }

  console.log(products);


  customElements.define('product-card', ProductComponent);
  customElements.define('cart-button', CartButtonComponent);


  function createProductElement(product) {
    const productElement = document.createElement('product-card');
    productElement.product = product;
    productElement.cart = cart;
    return productElement;
  }
  
  // Get the container element where products will be displayed
  const container = document.getElementById('product-container');
  
  // Loop through the products and append them to the container
  products.forEach((product) => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  });



  
})