@font-face {
    font-family: 'MyHandwrittenFont';
    src: url('fonts/PPNeueMontreal-Bold.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MyMonospaceFont';
    src: url('fonts/PPNeueMontreal-Book.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'MyMonospaceFont';
    src: url('fonts/PPNeueMontreal-Medium.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
}

body {
    margin: 0;
    font-family: sans-serif;
    background: #fffaf0;
    color: #333;
    box-sizing: border-box;
    padding: 1rem;
}

a {
    color: #4a7c59; /* deep earthy green */
    text-decoration: none;
    transition: color 0.3s ease, transform 0.2s ease;
}

a:hover {
    color: #d94f30; /* muted red/orange on hover */
    transform: scale(1.1); 
}

header {
    /* background-color: black; */
    background: url('images/headingimage.jpg') center/cover no-repeat;
    color: white;
    padding: 3rem 1rem 2rem;
    text-align: center;
    position: relative;
    text-transform: uppercase;
}

header::after {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

header h1, header img {
    position: relative;
    z-index: 1;
}

header h1 {
    font-family: 'MyHandwrittenFont';
}

body, nav, .gallery-item, footer, .lightbox-details {
    font-family: 'MyMonospaceFont';
}

header .logo {
    width: 100px;         
    height: 100px;      
    border-radius: 50%; 
    margin-bottom: 0.5rem;
    object-fit: cover;  
    border: 3px solid white;
}

nav {
    background: #ffe6e6;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    flex-wrap: wrap;
}

nav a {
    color: #4a7c59; /* deep earthy green */
    text-decoration: none;
    transition: color 0.3s ease, transform 0.2s ease;
    font-weight: bold;
}

nav a:hover {
        color: #d94f30; /* muted red/orange on hover */
    transform: scale(1.1);
}

.page {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
}

.gallery {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
}

.gallery-item {
    border: 2px solid #ffcccc;
    padding: 0.5rem;
    background: white;
    text-align: center;
    cursor: pointer;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: popIn 0.5s ease;
}

.gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.gallery-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.filters {
    text-align: center;
    margin: 1rem 0;
}

.filters button {
    background: #ffe6e6;
    border: none;
    margin: 0.3rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'MyMonospaceFont', monospace; /* your custom font */
    transition: background 0.3s, transform 0.2s;
}

.filter-btn.active-filter {
    background: #ff9999;
    color: white;
}

.filters button:hover {
    background: #ff9999;
    transform: scale(1.05);
}

.lightbox {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 9999; 
}

.lightbox.visible {
    visibility: visible;
    opacity: 1;
}


.lightbox-content {
    background: white;
    border-radius: 10px;
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    z-index: 10000; 
}

.lightbox-content img {
    width: 100%;
    max-width: 400px;
    object-fit: cover;
}

.lightbox-details {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Make product price bolder */
.lightbox-details #lightboxPrice {
    font-weight: bold;
}

.lightbox-details h3 {
    margin: 0 0 0.5rem;
}

.lightbox-details p {
    margin: 0.2rem 0;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    z-index: 10001;
    user-select: none;
}

.status-box {
    background: #fff0f0;
    border: 2px solid #ffcccc;
    border-radius: 15px;
    padding: 1rem;
    margin: 1rem 0;
    /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
    max-width: 400px;
}

.status-indicator {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 8px;
    border-radius: 50%;
    background-color: gray;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.4);
    /* animation: pulse 1.5s infinite; */
}

.status-box h3 {
    margin-top: 0;
}

.status-indicator.green {
    background-color: #4caf50; /* green */
    animation: pulse 1.5s infinite;
}

.status-indicator.red {
    background-color: #f44336; /* red */
}

.status-indicator.orange {
    background-color: #ff9800; /* yellow-orange */
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(0,0,0,0.4); }
    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0,0,0,0); }
    100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
}


.about-section .about-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
}

.about-section .about-image {
    flex: 1 1 40%;
}

.about-section .about-image img {
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.about-section .about-text {
    flex: 1 1 55%;
}

.about-section .about-text h2 {
    margin-top: 0;
}
@media (max-width: 900px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .about-section .about-content {
        flex-direction: column;
        text-align: center;
    }
}


@media (max-width: 600px) {
    .lightbox-content {
        flex-direction: column;
    }

    .lightbox-content img {
        width: 100%;
        max-width: none;
    }
    .gallery {
        grid-template-columns: 1fr;
    }
}


footer {
    background: #ffe6e6;
    text-align: center;
    padding: 1.5rem;
    margin-top: 2rem;
    font-size: 0.9rem;
}

footer a {
    color: #4a7c59; /* deep earthy green */
    text-decoration: none;
    margin: 0 0.5rem;
    transition: color 0.3s ease, transform 0.2s ease;
}

footer a:hover {
    color: #d94f30; /* muted red/orange on hover */
    transform: scale(1.2);
}

.social-links i {
    font-size: 1.5rem;
}

@keyframes popIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
