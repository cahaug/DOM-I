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


//Adding text for links to nav

const navText = document.getElementsByTagName('a');
const navTextArr = Array.from(navText);
navTextArr[0].textContent = siteContent["nav"]["nav-item-1"];
navTextArr[1].textContent = siteContent["nav"]["nav-item-2"];
navTextArr[2].textContent = siteContent["nav"]["nav-item-3"];
navTextArr[3].textContent = siteContent["nav"]["nav-item-4"];
navTextArr[4].textContent = siteContent["nav"]["nav-item-5"];
navTextArr[5].textContent = siteContent["nav"]["nav-item-6"];



//Adding h1 text to page

const ctaTxt = document.getElementsByTagName("h1")[0];
ctaTxt.textContent = siteContent["cta"]["h1"];

// const linebreak = document.createElement("br");
// const h1textContent = ["DOM", "Is", "Awesome"];
// const haychOne = document.querySelector('h1');
// haychOne.append(linebreak);
// haychOne.append(h1textContent[0]);
// haychOne.append(linebreak);
// haychOne.append(h1textContent[1]);
// haychOne.append(linebreak);
// haychOne.append(h1textContent[2]);
// console.log(haychOne);

// const ctaText = document.querySelector('.cta-text');
// let h1a = document.querySelector('h1');
// let h1b = document.createElement('h1');
// let h1c = document.createElement('h1');

// let firstBreak = document.createElement(“br”);

// h1a.textContent = str1[0];
// h1b.textContent = str1[1];
// h1c.textContent = str1[2];

// ctaText.prepend(firstBreak);
// ctaText.prepend(h1a);
// ctaText.prepend(h1b);
// ctaText.prepend(h1c);


//text to button

const buttonMod = document.querySelector('button');
buttonMod.textContent = siteContent["cta"]["button"];

//image into cta

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//image code snippets

const codeSnippets = document.querySelector('#middle-img');
codeSnippets.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//top-content text

// Text Fill & Contact:
const testing1 = document.getElementsByTagName('h4');
const testing2 = Array.from(testing1);
testing2[0].textContent = siteContent["main-content"]["features-h4"];
testing2[1].textContent = siteContent["main-content"]["about-h4"];
testing2[2].textContent = siteContent["main-content"]["services-h4"];
testing2[3].textContent = siteContent["main-content"]["product-h4"];
testing2[4].textContent = siteContent["main-content"]["vision-h4"];
testing2[5].textContent = siteContent["contact"]["contact-h4"];
const testingP = document.getElementsByTagName('p');
const testingP2 = Array.from(testingP);
testingP2[0].textContent = siteContent["main-content"]["features-content"];
testingP2[1].textContent = siteContent["main-content"]["about-content"];
testingP2[2].textContent = siteContent["main-content"]["services-content"];
testingP2[3].textContent = siteContent["main-content"]["product-content"];
testingP2[4].textContent = siteContent["main-content"]["vision-content"];
testingP2[5].textContent = siteContent["contact"]["address"];
testingP2[6].textContent = siteContent["contact"]["phone"];
testingP2[7].textContent = siteContent["contact"]["email"];
testingP2[8].textContent = siteContent["footer"]["copyright"];


//green nav-text

navTextArr.forEach(item => {item.style.color = 'green'});

//appendChild and prepend
// const navSystem = document.querySelector('nav');
// navSystem.appendChild('Homework');
const navSubSystem = document.querySelector('a');
navSubSystem.prepend('First ');

