const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav

let links = document.querySelectorAll('a');
links.forEach((link, i) => {
  link.textContent = Object.values(siteContent.nav)[i]
  link.style.color = "green"
})

const newLink1 = document.createElement('a')
newLink1.textContent = "Home"
newLink1.style.color = "green"

const nav = document.querySelector("nav")
nav.prepend(newLink1)

const newLink2 = document.createElement('a')
newLink2.textContent = "Pricing"
newLink2.style.color = "green"

nav.append(newLink2)



// CTA
let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let title = document.querySelector('h1')
title.textContent = siteContent["cta"]["h1"]

let button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]


// Main Content
let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainHeadings = document.querySelectorAll('h4')
mainHeadings[0].textContent = siteContent["main-content"]["features-h4"]
mainHeadings[1].textContent = siteContent["main-content"]["about-h4"]
mainHeadings[2].textContent = siteContent["main-content"]["services-h4"]
mainHeadings[3].textContent = siteContent["main-content"]["product-h4"]
mainHeadings[4].textContent = siteContent["main-content"]["vision-h4"]
// for (let i = 0; i < mainHeadings.length; i++) {
//   mainHeadings[i].textContent = siteContent["main-content"][i]
// }

let mainParagraphs = document.querySelectorAll('p')
mainParagraphs[0].textContent = siteContent["main-content"]["features-content"]
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"]
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"]
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"]
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"]


// Contact section
mainHeadings[5].textContent = siteContent["contact"]["contact-h4"]
mainParagraphs[5].textContent = siteContent["contact"]["address"]
mainParagraphs[6].textContent = siteContent["contact"]["phone"]
mainParagraphs[7].textContent = siteContent["contact"]["email"]

// Footer section
let footer = document.querySelector('footer')
footer.textContent = siteContent["footer"]["copyright"]
