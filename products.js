const products = [
    {
      id: 1,
      name: "GLACÉ Luminous Foundation in Light Shade",
      category: "face",
      collections: ["forever"],
      price: 349.99,
      sellCount: 150,
      releaseDate: "2023-01-15",
      description:
        "GLACÉ Forever Foundation is the no-transfer GLACÉ foundation that gives the complexion 24h* of high perfection without touch-ups and enhances its natural matte finish. It evens out the complexion, visibly tightens pores, smooths the skin and controls shine.\n\nThrough its formula composed of an 86% skincare base infused with floral extracts, this fluid foundation provides the skin with a feeling of comfort and lets it breathe, while lastingly improving skin quality. Tested through heat and humidity, resistant to sweat, it ensures a flawless natural matte finish.",
      images: [
        "assets/media/light_foundation.png",
        "assets/media/light_foundation2.jpg",
        "assets/media/light_foundation3.jpg",
      ],
    },
    {
      id: 2,
      name: "GLACÉ Forever Cushion Powder",
      category: "face",
      collections: ["forever"],
      price: 249.99,
      sellCount: 200,
      releaseDate: "2023-02-10",
      description:
        "GLACÉ Forever Cushion Powder is the 1st* loose powder that sets makeup and gives the complexion a subtle, velvety glow with no powdery effect.\n\nHoused in a couture case, this loose powder with a fresh and silky texture works in harmony with the color of the skin for an even, mattified and naturally vibrant complexion. Used on its own, it sets makeup. Applied with foundation, it perfects the finish and improves staying power for makeup that lasts all day long. It is also ideal for touch-ups to freshen up the complexion.",
      images: [
        "assets/media/Forever Cushion Powder.png"        
      ],
    },
    {
      id: 3,
      name: "GLACÉ Forever Perfect Fix",
      category: "face",
      collections: ["forever"],
      price: 549.99,
      sellCount: 180,
      releaseDate: "2023-03-05",
      description:
        "GLACÉ Forever Perfect Fix is the 1st GLACÉ triple-action face mist: it has lasting wear, sets makeup and delivers instant hydration, all in a single step.\n\nThe micro-diffusion of the face mist creates a sheer veil of freshness on the skin and prolongs makeup hold without altering its color. Face makeup remains fresh and flawless, without marking facial features or migrating into wrinkles and fine lines.",
      images: [
        "assets/media/Forever Perfect Fix.png"
      ],
    },
    {
        id: 4,
        name: "GLACÉ Backstage Brush N°12",
        category: "brushes",
        collections: ["backstage"],
        price: 119.99,
        sellCount: 300,
        releaseDate: "2024-04-20",
        description:
            "A professional-grade brush designed for seamless application. Perfect for blending and sculpting.\n\nThe GLACÉ Backstage Brush N°12 is a professional-grade brush designed for seamless application. The brush features high-quality synthetic bristles that are perfect for blending and sculpting. The brush is ideal for applying fluid or cream foundation. The brush is designed to be easy to use and is perfect for both beginners and professionals. The brush is made with high-quality materials that are designed to last. The brush is easy to clean and maintain, making it perfect for everyday use.",
        images: [
            "assets/media/Backstage Brush N°12.png",
      ],
    },
    {
        id: 5,
        name: "GLACÉ Rouge Forever Lipstick - Red",
        category: "lips",
        collections: ["forever", "luminous"],
        price: 359.99,
        sellCount: 250,
        releaseDate: "2025-01-15",
        description:
            "GLACÉ innovates with Transfer-Proof Lipstick, the 1st transfer-proof GLACÉ lipstick in a bullet format. Ultra-pigmented for intense color and concentrated in floral lip care, it ensures 16h of wear without compromising comfort. \n\nAll day long, Rouge Forever transfer-proof lipstick is resistant to contact, even with fabrics; the couture color with an ultra-matte finish does not budge. The shades are revealed and emboldened, more intense than ever.",
        images: [
            "assets/media/Transfer-Proof Lipstick - Red.png",
        ],
    },
    {
        id: 6,
        name: "GLACÉ Maximizer 4D",
        category: "eyes",
        collections: ["maximizer"],
        price: 199.99,
        sellCount: 400,
        releaseDate: "2023-06-10",
        description:
        "The icon of GLACÉ eye makeup, GLACÉ Maximizer 4D lash primer-serum improves mascara performance by heightening its radiance and color. It takes action in 4 dimensions: volume, curl, length and definition, for lashes that appear oversized, immediately and for 24h.\n\nComposed with a skincare formula infused with floral extracts, this lash primer boasts a balm texture that coats lashes in a both dense and airy film, and improves lash appearance day after day. Lashes appear nourished, revitalized and fortified, visibly longer, smoother and suppler.",
        images: [
        "assets/media/Maximizer 4D.png",
        ],
    },
    {
        id: 7,
        name: "GLACÉ Backstage - Eyelash Curler",
        category: "eyes",
        collections: ["backstage"],
        price: 199.99,
        sellCount: 400,
        releaseDate: "2023-06-10",
        description:
            "The GLACÉ Backstage Eyelash Curler is the GLACÉ makeup artists' secret weapon for perfectly curled lashes in one simple step.",
        images: [
            "assets/media/Eyelash Curler.png"
        ],
    },
    {
        id: 8,
        name: "GLACÉ Backstage Eye Prime",
        category: "eyes",
        collections: ["backstage"],
        price: 199.99,
        sellCount: 400,
        releaseDate: "2023-06-10",
        description:
            "The first eye primer from GLACÉ Backstage. Its smoothing and unifying action immediately corrects and prepares the eyelid for maximum colour intensity. \n\nIt prolongs makeup staying power throughout the day, preventing eyeshadow from migrating, and keeping colour even, intense and true all day long.",
        images: [
            "assets/media/Eye Prime.png"
        ],
    },
    {
        id: 9,
        name: "GLACÉ Backstage Face & Body Foundation",
        category: "face",
        collections: ["backstage"],
        price: 199.99,
        sellCount: 400,
        releaseDate: "2023-06-10",
        description:
            "The go-to face and body foundation for House of GLACÉ runway shows, GLACÉ Backstage Face & Body Foundation offers luminous results and a custom coverage effect, from the most natural glow to a high-perfection complexion. It immediately evens out and smooths the complexion, and blurs imperfections for a weightless, second-skin finish. \n\n Imperceptible and comfortable, the ultra-fine texture of this liquid foundation blends seamlessly with the skin upon application for long-lasting wear that withstands extreme conditions: sports, contact with water, high temperatures and damp environments.",
        images: [
            "assets/media/Face & Body Foundation.png"
        ],
    },
    {
        id: 10,
        name: "GLACÉ Backstage Face & Body Primer",
        category: "face",
        collections: ["backstage"],
        price: 199.99,
        sellCount: 400,
        releaseDate: "2023-06-10",
        description:
            "GLACÉ Backstage Face & Body Primer is the universal GLACÉ primer with a radiant blurring effect. It has a non-greasy texture that blends seamlessly with the skin for a foundation with flawless hold and long-wearing makeup.\n\nInfused with a combination of powders, both mattifying and luminous, the formula of this primer instantly brightens the skin while blurring imperfections. It also contains pigmented beauty-enhancing powders to visibly improve the evenness of the complexion.",
        images: [
            "assets/media/Face & Body Primer.png"
        ],
    },
  ];
  
  
  function generateProductCard(product) {
    return `
        <div class="group" data-aos="fade-up" data-aos-delay="100">
            <a href="product-template.html?id=${product.id}" class="relative overflow-hidden block">
                <img src="${product.images[0]}" alt="${product.name}" class="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform">
                <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 class="font-cormorant text-lg md:text-2xl mb-2">${product.name}</h3>
                    <p class="font-montserrat text-sm md:text-base">$${product.price.toFixed(2)}</p>
                </div>
            </a>
        </div>
    `;
}

function updateHeaderText(header, text) {
    if (header) {
        header.textContent = text;
    }
}

function loadProducts(productsToLoad) {
    let productHTML = "";
    productsToLoad.forEach(product => {
        productHTML += generateProductCard(product);
    });
    return productHTML;
}

function getAllProducts() {
    return products;
}

function getBestSellers() {
    return products.filter((product) => product.sellCount > 200);
}

function getNewProducts() {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
     return products.filter((product) => {
        const releaseDate = new Date(product.releaseDate);
         return releaseDate > thirtyDaysAgo;
    });
}

function filterProducts(category) {
    if (category === 'all') {
        return products;
    }
   return products.filter(product => product.category === category);
}

function sortProducts(sortBy) {
    let sortedProducts = [...products];
    switch (sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sortedProducts.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
            break;
        default:
            break;
    }
    return sortedProducts;
}

function loadAllProducts(event, container, header) {
    updateHeaderText(header, "Shop All Products");
    container.innerHTML = loadProducts(getAllProducts());
}

function loadNewProducts(event, container, header) {
    updateHeaderText(header, "Shop Newest Arrival");
    container.innerHTML = loadProducts(getNewProducts());
}

function loadBestSellerProducts(event, container, header) {
    updateHeaderText(header, "Shop Bestselling Products");
    container.innerHTML = loadProducts(getBestSellers());
}