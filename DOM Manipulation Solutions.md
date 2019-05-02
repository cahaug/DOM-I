//Adding text for links to nav

const navText = document.getElementsByTagName('a');
    console.log(navText);
const navTextArr = Array.from(navText);
    console.log(navTextArr);
navTextArr[0].textContent = 'Services';
navTextArr[1].textContent = 'Product';
navTextArr[2].textContent = 'Vision';
navTextArr[3].textContent = 'Features';
navTextArr[4].textContent = 'About';
navTextArr[5].textContent = 'Contact';
console.log(navTextArr);


//Adding h1 text to page

const linebreak = document.createElement("br");
const h1textContent = ["DOM", "Is", "Awesome"];
const haychOne = document.querySelector('h1');
haychOne.append(linebreak);
haychOne.append(h1textContent[0]);
haychOne.append(linebreak);
haychOne.append(h1textContent[1]);
haychOne.append(linebreak);
haychOne.append(h1textContent[2]);
console.log(haychOne);

//text to button

const buttonMod = document.querySelector('button');
buttonMod.textContent = "Get Started";

//image into cta

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', 'img/header-img.png');

//image code snippets

const codeSnippets = document.querySelector('#middle-img');
codeSnippets.setAttribute('src', 'img/mid-page-accent.jpg');

//top-content text

const topconTextCon = document.querySelectorAll('.top-content');
console.log(topconTextCon);