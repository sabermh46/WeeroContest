
class Product {
    constructor(id, name, unit, imageLink, category, price, description) {
      this.id = id;
      this.name = name;
      this.unit = unit;
      this.imageLink = imageLink;
      this.category = category;
      this.price = parseFloat(price);
      this.description = description;
    }
  }

const productList = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      unit: "1 unit",
      imageLink: "https://cdn.dxomark.com/wp-content/uploads/medias/post-95390/Apple-iPhone-13-Pro-Max-featured-image-packshot-review.jpg",
      category: "Electronics",
      price: 1200.00,
      description: "The iPhone 13 Pro is the latest flagship smartphone from Apple, featuring a stunning OLED display, powerful A15 Bionic chip, and advanced camera system."
    },
    {
      id: 2,
      name: "Samsung 4K Smart TV",
      unit: "1 unit",
      imageLink: "https://w7.pngwing.com/pngs/870/575/png-transparent-samsung-ku6000-led-backlit-lcd-ultra-high-definition-television-4k-resolution-smart-tv-samsung-television-media-led.png",
      category: "Electronics",
      price: 999.99,
      description: "Experience breathtaking 4K resolution and smart TV capabilities with the Samsung 4K Smart TV. Enjoy your favorite shows and movies in stunning clarity."
    },
    {
      id: 3,
      name: "Bose QuietComfort 35 II Headphones",
      unit: "1 unit",
      imageLink: "https://m.media-amazon.com/images/I/71o53boVN6L.jpg",
      category: "Electronics",
      price: 349.99,
      description: "Immerse yourself in music with the Bose QuietComfort 35 II headphones. These noise-canceling headphones provide exceptional sound quality and comfort."
    },
    {
      id: 4,
      name: "Canon EOS 5D Mark IV DSLR Camera",
      unit: "1 unit",
      imageLink: "https://previews.123rf.com/images/dominionart/dominionart1702/dominionart170200013/72253310-canon-5d-mark-iv-camera-30-4mp-cmos-full-frame-sensor-with-dual-pixel-af-and-4k-video.jpg",
      category: "Electronics",
      price: 2499.00,
      description: "Capture stunning photos and videos with the Canon EOS 5D Mark IV DSLR Camera. It's a favorite among professional photographers."
    },
    {
      id: 5,
      name: "Xbox Series X Gaming Console",
      unit: "1 unit",
      imageLink: "https://cdn.vox-cdn.com/thumbor/c6yxzAmxw2uBhGX68c7vS0fwwHc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21866578/Still_Image_Xbox_Series_S_5__Horizontal_View_Console_Controller.jpg",
      category: "Electronics",
      price: 499.99,
      description: "Experience next-gen gaming with the Xbox Series X Gaming Console. Play your favorite games in 4K resolution and enjoy lightning-fast loading times."
    },
    {
      id: 6,
      name: "Instant Pot Duo Evo Plus Pressure Cooker",
      unit: "1 unit",
      imageLink: "https://cdn.mos.cms.futurecdn.net/ALZvgCrwnmsTCzUwoxeR5o-1200-80.jpg",
      category: "Kitchen Appliances",
      price: 129.99,
      description: "Prepare delicious meals in no time with the Instant Pot Duo Evo Plus Pressure Cooker. It's a versatile kitchen appliance that's a must-have for home cooks."
    },
    {
      id: 7,
      name: "KitchenAid Stand Mixer",
      unit: "1 unit",
      imageLink: "https://www.popsci.com/uploads/2023/09/06/kitchen-aid-mixer-white-product-photo.jpg?auto=webp&width=800&crop=16:10,offset-x50",
      category: "Kitchen Appliances",
      price: 299.00,
      description: "The KitchenAid Stand Mixer is a baker's best friend. It's perfect for mixing dough, batter, and more. Elevate your baking game with this iconic appliance."
    },
    {
      id: 8,
      name: "Cuisinart Coffee Maker",
      unit: "1 unit",
      imageLink: "https://m.media-amazon.com/images/I/71KnrGn7H-L.jpg",
      category: "Kitchen Appliances",
      price: 79.99,
      description: "Start your day right with the Cuisinart Coffee Maker. Brew your favorite coffee with ease and enjoy the rich, aromatic flavors every morning."
    },
    {
      id: 9,
      name: "Ninja Foodi Grill",
      unit: "1 unit",
      imageLink: "https://res.cloudinary.com/sharkninja-na/image/upload/b_rgb:FFFFFF,c_pad,dpr_auto,f_webp,h_600,q_auto,w_800/c_pad,h_600,w_800/BG500C_01?pgw=1&pgwact=1",
      category: "Kitchen Appliances",
      price: 249.99,
      description: "Grill, air fry, and roast with the Ninja Foodi Grill. It's a versatile kitchen appliance that helps you create delicious and healthy meals."
    },
    {
      id: 10,
      name: "Breville Smart Oven Pro",
      unit: "1 unit",
      imageLink: "https://www.breville.com.ph/image/cache/catalog/catalog/smart-oven-pro/smart-oven-pro-800x800.jpg",
      category: "Kitchen Appliances",
      price: 349.95,
      description: "The Breville Smart Oven Pro is a countertop oven that can do it all, from toasting and baking to roasting and broiling. It's a kitchen essential."
    },
    {
      id: 11,
      name: "The North Face Waterproof Jacket",
      unit: "1 unit",
      imageLink: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679925548-women-s-1996-retro-nuptse-jacket-tnf-white-6421a0fabcd58.jpg?crop=1xw:1xh;center,top&resize=980:*",
      category: "Outdoor Gear",
      price: 199.99,
      description: "Stay dry in any weather with The North Face Waterproof Jacket. It's a durable and breathable jacket designed for outdoor adventures."
    },
    {
      id: 12,
      name: "Coleman 6-Person Tent",
      unit: "1 unit",
      imageLink: "https://m.media-amazon.com/images/I/71meUXXSJgL.jpg",
      category: "Outdoor Gear",
      price: 149.99,
      description: "Camp comfortably with the Coleman 6-Person Tent. It's spacious and easy to set up, making it perfect for family camping trips."
    },
    {
      id: 13,
      name: "Osprey Atmos AG 65 Backpack",
      unit: "1 unit",
      imageLink: "https://www.theplanettraveller.com/wp-content/uploads/Osprey-Atmos-AG-65-Backpack-Small-Mens-Backpacking-Black-1.jpg",
      category: "Outdoor Gear",
      price: 270.00,
      description: "Hike with ease and comfort using the Osprey Atmos AG 65 Backpack. It's designed for long treks and offers excellent ventilation and support."
    },
    {
      id: 14,
      name: "Yeti Tundra 65 Cooler",
      unit: "1 unit",
      imageLink: "https://westsupply.co.nz/cdn/shop/products/TUNDRA65WHITE_1024x.jpg?v=1597874175",
      category: "Outdoor Gear",
      price: 349.99,
      description: "Keep your drinks and food cold for days with the Yeti Tundra 65 Cooler. It's built tough and perfect for camping, fishing, and outdoor events."
    },
    {
      id: 15,
      name: "Black Diamond Headlamp",
      unit: "1 unit",
      imageLink: "https://ironsidemilitary.com.au/wp-content/uploads/2022/09/a78038e2f7cec5d2920bc8ca946e3c0ef877cfdc.jpg",
      category: "Outdoor Gear",
      price: 49.95,
      description: "Illuminate your way in the dark with the Black Diamond Headlamp. It's a reliable and hands-free lighting solution for outdoor activities."
    },
    {
      id: 16,
      name: "The Great Gatsby by F. Scott Fitzgerald",
      unit: "1 book",
      imageLink: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
      category: "Books",
      price: 10.99,
      description: "Dive into the Jazz Age with 'The Great Gatsby' by F. Scott Fitzgerald. This classic novel explores themes of wealth, love, and the American Dream."
    },
    {
      id: 17,
      name: "Educated by Tara Westover",
      unit: "1 book",
      imageLink: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
      category: "Books",
      price: 15.99,
      description: "Follow the remarkable journey of Tara Westover in 'Educated.' This memoir is a testament to the power of education and self-discovery."
    },
    {
      id: 18,
      name: "Becoming by Michelle Obama",
      unit: "1 book",
      imageLink: "https://static-01.daraz.com.bd/p/a1797aed2a8a16a80089fb55ace6cbc4.jpg",
      category: "Books",
      price: 19.99,
      description: "Discover the inspiring life of Michelle Obama in her memoir, 'Becoming.' She shares her personal experiences, challenges, and triumphs."
    },
    {
      id: 19,
      name: "The Silent Patient by Alex Michaelides",
      unit: "1 book",
      imageLink: "https://static-01.daraz.com.bd/p/87f572f11a88ca761a720b37e0ba7ec8.jpg",
      category: "Books",
      price: 12.95,
      description: "Explore the mind of 'The Silent Patient' in this gripping psychological thriller by Alex Michaelides. It's a page-turner filled with twists and suspense."
    },
    {
      id: 20,
      name: "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
      unit: "1 book",
      imageLink: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595674533i/23692271.jpg",
      category: "Books",
      price: 16.99,
      description: "Embark on a journey through the history of our species with 'Sapiens' by Yuval Noah Harari. This book offers a thought-provoking perspective on human evolution and society."
    }
  ];



  const products = productList.map(({
    id, name, unit, imageLink, category, price, description
  }, i)=>{
    return new Product(id, name, unit, imageLink, category, price, description)
  })

  export default products
  export {Product}