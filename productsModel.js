
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
      imageLink: "https://example.com/iphone_image.jpg",
      category: "Electronics",
      price: 1200.00,
      description: "The iPhone 13 Pro is the latest flagship smartphone from Apple, featuring a stunning OLED display, powerful A15 Bionic chip, and advanced camera system."
    },
    {
      id: 2,
      name: "Samsung 4K Smart TV",
      unit: "1 unit",
      imageLink: "https://example.com/samsung_tv_image.jpg",
      category: "Electronics",
      price: 999.99,
      description: "Experience breathtaking 4K resolution and smart TV capabilities with the Samsung 4K Smart TV. Enjoy your favorite shows and movies in stunning clarity."
    },
    {
      id: 3,
      name: "Bose QuietComfort 35 II Headphones",
      unit: "1 unit",
      imageLink: "https://example.com/bose_headphones_image.jpg",
      category: "Electronics",
      price: 349.99,
      description: "Immerse yourself in music with the Bose QuietComfort 35 II headphones. These noise-canceling headphones provide exceptional sound quality and comfort."
    },
    {
      id: 4,
      name: "Canon EOS 5D Mark IV DSLR Camera",
      unit: "1 unit",
      imageLink: "https://example.com/canon_camera_image.jpg",
      category: "Electronics",
      price: 2499.00,
      description: "Capture stunning photos and videos with the Canon EOS 5D Mark IV DSLR Camera. It's a favorite among professional photographers."
    },
    {
      id: 5,
      name: "Xbox Series X Gaming Console",
      unit: "1 unit",
      imageLink: "https://example.com/xbox_console_image.jpg",
      category: "Electronics",
      price: 499.99,
      description: "Experience next-gen gaming with the Xbox Series X Gaming Console. Play your favorite games in 4K resolution and enjoy lightning-fast loading times."
    },
    {
      id: 6,
      name: "Instant Pot Duo Evo Plus Pressure Cooker",
      unit: "1 unit",
      imageLink: "https://example.com/instant_pot_image.jpg",
      category: "Kitchen Appliances",
      price: 129.99,
      description: "Prepare delicious meals in no time with the Instant Pot Duo Evo Plus Pressure Cooker. It's a versatile kitchen appliance that's a must-have for home cooks."
    },
    {
      id: 7,
      name: "KitchenAid Stand Mixer",
      unit: "1 unit",
      imageLink: "https://example.com/kitchenaid_mixer_image.jpg",
      category: "Kitchen Appliances",
      price: 299.00,
      description: "The KitchenAid Stand Mixer is a baker's best friend. It's perfect for mixing dough, batter, and more. Elevate your baking game with this iconic appliance."
    },
    {
      id: 8,
      name: "Cuisinart Coffee Maker",
      unit: "1 unit",
      imageLink: "https://example.com/cuisinart_coffee_maker_image.jpg",
      category: "Kitchen Appliances",
      price: 79.99,
      description: "Start your day right with the Cuisinart Coffee Maker. Brew your favorite coffee with ease and enjoy the rich, aromatic flavors every morning."
    },
    {
      id: 9,
      name: "Ninja Foodi Grill",
      unit: "1 unit",
      imageLink: "https://example.com/ninja_foodi_grill_image.jpg",
      category: "Kitchen Appliances",
      price: 249.99,
      description: "Grill, air fry, and roast with the Ninja Foodi Grill. It's a versatile kitchen appliance that helps you create delicious and healthy meals."
    },
    {
      id: 10,
      name: "Breville Smart Oven Pro",
      unit: "1 unit",
      imageLink: "https://example.com/breville_oven_image.jpg",
      category: "Kitchen Appliances",
      price: 349.95,
      description: "The Breville Smart Oven Pro is a countertop oven that can do it all, from toasting and baking to roasting and broiling. It's a kitchen essential."
    },
    {
      id: 11,
      name: "The North Face Waterproof Jacket",
      unit: "1 unit",
      imageLink: "https://example.com/north_face_jacket_image.jpg",
      category: "Outdoor Gear",
      price: 199.99,
      description: "Stay dry in any weather with The North Face Waterproof Jacket. It's a durable and breathable jacket designed for outdoor adventures."
    },
    {
      id: 12,
      name: "Coleman 6-Person Tent",
      unit: "1 unit",
      imageLink: "https://example.com/coleman_tent_image.jpg",
      category: "Outdoor Gear",
      price: 149.99,
      description: "Camp comfortably with the Coleman 6-Person Tent. It's spacious and easy to set up, making it perfect for family camping trips."
    },
    {
      id: 13,
      name: "Osprey Atmos AG 65 Backpack",
      unit: "1 unit",
      imageLink: "https://example.com/osprey_backpack_image.jpg",
      category: "Outdoor Gear",
      price: 270.00,
      description: "Hike with ease and comfort using the Osprey Atmos AG 65 Backpack. It's designed for long treks and offers excellent ventilation and support."
    },
    {
      id: 14,
      name: "Yeti Tundra 65 Cooler",
      unit: "1 unit",
      imageLink: "https://example.com/yeti_cooler_image.jpg",
      category: "Outdoor Gear",
      price: 349.99,
      description: "Keep your drinks and food cold for days with the Yeti Tundra 65 Cooler. It's built tough and perfect for camping, fishing, and outdoor events."
    },
    {
      id: 15,
      name: "Black Diamond Headlamp",
      unit: "1 unit",
      imageLink: "https://example.com/black_diamond_headlamp_image.jpg",
      category: "Outdoor Gear",
      price: 49.95,
      description: "Illuminate your way in the dark with the Black Diamond Headlamp. It's a reliable and hands-free lighting solution for outdoor activities."
    },
    {
      id: 16,
      name: "The Great Gatsby by F. Scott Fitzgerald",
      unit: "1 book",
      imageLink: "https://example.com/great_gatsby_book_image.jpg",
      category: "Books",
      price: 10.99,
      description: "Dive into the Jazz Age with 'The Great Gatsby' by F. Scott Fitzgerald. This classic novel explores themes of wealth, love, and the American Dream."
    },
    {
      id: 17,
      name: "Educated by Tara Westover",
      unit: "1 book",
      imageLink: "https://example.com/educated_book_image.jpg",
      category: "Books",
      price: 15.99,
      description: "Follow the remarkable journey of Tara Westover in 'Educated.' This memoir is a testament to the power of education and self-discovery."
    },
    {
      id: 18,
      name: "Becoming by Michelle Obama",
      unit: "1 book",
      imageLink: "https://example.com/becoming_book_image.jpg",
      category: "Books",
      price: 19.99,
      description: "Discover the inspiring life of Michelle Obama in her memoir, 'Becoming.' She shares her personal experiences, challenges, and triumphs."
    },
    {
      id: 19,
      name: "The Silent Patient by Alex Michaelides",
      unit: "1 book",
      imageLink: "https://example.com/silent_patient_book_image.jpg",
      category: "Books",
      price: 12.95,
      description: "Explore the mind of 'The Silent Patient' in this gripping psychological thriller by Alex Michaelides. It's a page-turner filled with twists and suspense."
    },
    {
      id: 20,
      name: "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
      unit: "1 book",
      imageLink: "https://example.com/sapiens_book_image.jpg",
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

  products.map((p)=>{
    console.log(p);
  })

  export default products