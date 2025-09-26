const products = [
    { 
        name: 'Animal Crossing Prints', 
        category: 'prints',
        price: '$4 each or buy all 3 for $10', 
        description: 'Postcard sized prints featuring Fish, Sea Creatures, and Bugs from the game Animal Crossing!', 
        img: 'images/animalcrossing.jpeg' 
    },
    { 
        name: 'Clear Bunny Sticker', 
        category: 'stickers',
        price: '$3', 
        description: 'Transparent sticker featuring a varient of the bunny print in black ink. Waterproof and made in small batches with a cricut.', 
        img: 'images/clearbunny.jpeg' 
    },
    { 
        name: 'Roarrr Tiger Sticker', 
        category: 'stickers',
        price: '$3', 
        description: 'Tiger sticker based on one of my tufted rug designs. Waterproof and made in small batches with a cricut.', 
        img: 'images/tiger.jpeg' 
    },
    { 
        name: 'Crow Sticker', 
        category: 'stickers',
        price: '$3', 
        description: 'In this place we love corvids. Fun crow design with beige background. Waterproof and made in small batches with a cricut.', 
        img: 'images/corvid.jpeg' 
    },
    { 
        name: 'Fish Stickers', 
        category: 'stickers',
        price: '$2 each or buy 3 get one free', 
        description: 'My most popular stickers and first designs ever from when I used to sell on a TV dinner tray. They have changed a bit since the orginal prints and are now plain glossy. Waterproof and made in small batches with a cricut', 
        img: 'images/fishsticker.jpeg' 
    },

        {
        name: 'Bunny Pin', 
        category: 'buttons',
        price: '$2', 
        description: '1.5 inch button pins featuring the bunny print!', 
        img: 'images/bunnypins.JPG' 
    },
    { 
        name: 'Fish Earrings', 
        category: 'charms',
        price: '$6', 
        description: 'My most popular item! The designs vary when it comes to color and bead options. I have rainbow trout, sardines, and tuna colors. I can take some custom color options and can remove the star if you would like. Just DM me or email me and I will set aside a batch for you. Custom orders are $1 extra since it would need to be made to order rather than in my own time. Made with shrinky dinks, colored with either colored pencils or crayola markers. They are waterproof with a UV resin on both sides.', 
        img: 'images/fishearring.jpeg' 
    },
    {
        name: 'Pikmin Phone Charms', 
        category: 'charms',
        price: '$5', 
        description: 'Phone charms inspired by the game Pikmin! They can also double as charms for keychains. They have a polymer clay fruit charm and a millefiori glass flower bead attached to the bottom of the main charm. The charms are made with shrinky dinks and are  waterproof (except for the string of the charm itself) with a UV resin coat.', 
        img: 'images/pikmin.jpeg' 
    },
    {
        name: 'Fish Keychains', 
        category: 'charms',
        price: '$5', 
        description: 'The designs vary when it comes to color and bead options. I have rainbow trout, sardines, and tuna colors. I can take some custom color options and can remove the star if you would like. Just DM me or email me and I will set aside a batch for you. Custom orders are $1 extra since it would need to be made to order rather than in my own time. Made with shrinky dinks, colored with either colored pencils or crayola markers. They are waterproof with a UV resin on both sides.', 
        img: 'images/fishkeychain.jpeg' 
    },
    {
        name: 'Bunny Tote Bag', 
        category: 'totes',
        price: '$15', 
        description: 'Tote bags inspired by the orginal bunny lino print. These are on a black canvas durable tote bag. Printed with white vinyl cut with a cricut and ironed by me. They can be washed but handle better with handwashing and air drying for long term use to avoid cracking and warping of the design. You can iron them after drying, just put a cloth or wax paper above the design to avoid bubbling or melting the design.', 
        img: 'images/bunnytote.jpeg' 
    },
    {
        name: 'Greyhound Tote Bag', 
        category: 'totes',
        price: '$15', 
        description: 'Greyhound tote bag. These are on a white tote bag. Printed with black vinyl cut with a cricut and ironed by me. They can be washed but handle better with handwashing and air drying for long term use to avoid cracking and warping of the design. You can iron them after drying, just put a cloth or wax paper above the design to avoid bubbling or melting the design.', 
        img: 'images/greyhoundtote.jpeg' 
    },

    {
        name: 'Just a Lil Guy Sticker', 
        category: 'stickers',
        price: '$3', 
        description: 'Funny pigeon sticker with the text "Just a Lil Guy". Waterproof and made in small batches with a cricut.', 
        img: 'images/pidg.jpeg' 
    },
    {
        name: 'Bork Sticker', 
        category: 'stickers',
        price: '$3', 
        description: 'Doxies are small but mighty! Waterproof and made in small batches with a cricut.', 
        img: 'images/bork.jpeg' 
    },
    {
        name: 'Moth Lino Print', 
        category: 'prints',
        price: '$7', 
        description: 'Hand cut lino print on white paper with black ink.', 
        img: 'images/mothlino.jpeg' 
    },
    {
        name: 'Bunny Lino Print', 
        category: 'prints',
        price: '$7', 
        description: 'Lino block prints featuring the orginal bunny drawing. It comes in 3 versions: black ink on white paper, pink ink on white paper, & White ink on black paper.', 
        img: 'images/bunnylino.jpeg' 
    },
    {
        name: 'Poppy Sticker Sheet', 
        category: 'stickers',
        price: '$5', 
        description: 'Sticker sheet featuring 4 California poppies: The orginal California Poppy, Matilija Poppy, Fire Poppy, and Tufted Poppy. Made in small batches with a cricut.', 
        img: 'images/poppy.jpeg' 
    },
        {
        name: 'Wildflower Sticker Sheet', 
        category: 'stickers',
        price: '$5', 
        description: 'Sticker sheet featuring 5 California native wildflowers: Baby Blue Eyes, California Goldfields, Indian Paintbrush, Arroyo Lupine, and Purple Owls Clover. Made in small batches with a cricut.', 
        img: 'images/wildflower.jpeg' 
    },
        {
        name: 'Silly Goose Sticker', 
        category: 'stickers',
        price: '$3', 
        description: 'Just a Silly Goose! Stickers inspired by the game United Goose Game. Made in small batches with a cricut.', 
        img: 'images/sillygoose.jpeg' 
    },
    {
        name: 'Bunny Circle Sticker', 
        category: 'stickers',
        price: '$3', 
        description: 'Circle stickers featuring the orginal bunny drawing. Waterproof and made in small batchs with a cricut.', 
        img: 'images/roundbunny.jpeg' 
    },

    {
        name: 'Bunny Circle Print', 
        category: 'prints',
        price: '$5', 
        description: '8.5x11 inch print on white cardstock paper featuring the circle version of the orginal bunny print.', 
        img: 'images/bunnyprint.jpeg' 
    },

    {
        name: 'Greyhoundprint', 
        category: 'prints',
        price: '$3', 
        description: '8.5x11 inch print on white cardstock paper featuring the greyhound print', 
        img: 'images/greyhoundprint.jpeg' 
    },

    {
        name: 'Fish Lino Print', 
        category: 'prints',
        price: '$5', 
        description: '5.5x8.5 inch print on white cardstock paper featuring a handcut lino block print of sardines in a tin, using black lino block press ink.', 
        img: 'images/fishprint.jpeg' 
    },

        {
        name: 'Tiger Punch Needle Rug', 
        category: 'rug',
        price: 'Not for sale currently', 
        description: 'Hand punch needle tufted rug. One of a kind and only made once!', 
        img: 'images/tigerrug.jpeg' 
    },
];

// loading
// Pick a random loader message before the loader exits

const messages = [
    "setting up the stand",
    "unpacking trinkets and treasures",
    "hanging up tiny earrings",
    "putting out the buttons just right",
    "smoothing the tablecloth",
    "fluffing tote bags",
    "clipping art prints to the display",
    "lining up the sparkliest keychains",
    "placing the last pin just so",
    "testing the tiny bell (oops it still works!)",
    "lighting the invisible fairy lights",
];

const chosen = messages[Math.floor(Math.random() * messages.length)];
const loaderMsg = document.querySelector('.loader-message');
if (loaderMsg) {
  loaderMsg.innerHTML = `${chosen}<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>`;
}




document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    renderProducts(products);

    // Set 'All' filter active by default
    const allButton = document.querySelector('.filter-btn[onclick*="\'all\'"]');
    if (allButton) {
        allButton.classList.add('active-filter');
    }
});




// Page switching
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';

    if (pageId !== 'home') {
        // Leaving home → reset all filter highlights
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active-filter');
        });
    } else {
        // Returning to home → highlight 'All' by default
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active-filter');
        });
        const allButton = document.querySelector('.filter-btn[onclick*="\'all\'"]');
        if (allButton) {
            allButton.classList.add('active-filter');
        }
        // Also re-render all products
        renderProducts(products);
    }
}

// Render products
function renderProducts(list) {
    const gallery = document.getElementById('productGallery');
    gallery.innerHTML = '';

    if (list.length === 0) {
        const message = document.createElement('p');
        message.className = 'empty-message';
        message.textContent = 'Coming soon :)';
        gallery.appendChild(message);
        return;
    }

    if (list === products) {
        // Group all products by category but don't show category headers
        const categories = [...new Set(products.map(p => p.category))];

        categories.forEach(category => {
            const categoryGroup = products.filter(p => p.category === category);

            categoryGroup.forEach(product => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `
                    <img src="${product.img}" alt="${product.name}">
                    <p>${product.name}</p>
                `;
                item.addEventListener('click', () => {
                    openLightbox(product);
                });
                gallery.appendChild(item);
            });
        });
    } else {
        // Show only filtered category
        list.forEach(product => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <p>${product.name}</p>
            `;
            item.addEventListener('click', () => {
                openLightbox(product);
            });
            gallery.appendChild(item);
        });
    }
}

// Filter products
function filterProducts(category, button) {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active-filter');
    });

    // Add active class to the clicked button
    button.classList.add('active-filter');

    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}
// Lightbox open
function openLightbox(product) {
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxName = document.getElementById('lightboxName');
    const lightboxPrice = document.getElementById('lightboxPrice');
    const lightboxDescription = document.getElementById('lightboxDescription');

    lightboxImage.src = product.img;
    lightboxImage.alt = product.name;
    lightboxName.textContent = product.name;
    lightboxPrice.textContent = product.price;
    lightboxDescription.textContent = product.description;

    lightbox.classList.add('visible');
}

// Lightbox close
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('visible');
}

// Click outside lightbox to close
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

function loadLiveStatus() {
    const data = liveStatus; // or from fetch if using JSON

    document.getElementById('statusLocation').textContent = data.location;
    document.getElementById('statusSetup').textContent = data.status;
    document.getElementById('statusMessage').textContent = data.message;

    const indicator = document.getElementById('statusIndicator');
    indicator.classList.remove('green', 'red', 'orange'); // clear all

    const status = data.status.toLowerCase();

    if (status === 'selling' || status === 'open') {
        indicator.classList.add('green');
    } else if (status === 'setting up' || status === 'packing up') {
        indicator.classList.add('orange');
    } else {
        indicator.classList.add('red');
    }

    const now = new Date(data.lastUpdated);
    const formattedTime = lastUpdated.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
    document.getElementById('statusLastUpdated').textContent = formattedTime;
}

document.addEventListener('DOMContentLoaded', () => {
    loadLiveStatus();
});


// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    renderProducts(products);
});


