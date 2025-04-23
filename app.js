import serviceData from "./serviceData.js";
import skillData from "./skillData.js";


// num.innerText = serviceData.num
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    // navLinks.classList.toggle("drops")
   if (navLinks.style.height === "max-content") {
        navLinks.style.animationName = "moveupwards"
   }
});




console.log(serviceData);


// Target the container where the cards will be displayed
const serviceContainer = document.getElementById('wid-flex');

// Generate HTML for each service and inject it into the DOM
const newData = serviceData.filter(item => item.num && item.skill && item.skillTxt);

console.log(newData);

newData.forEach(({ num, skill, skillTxt }) => {
    const card = document.createElement('div');
    card.className = 'card hovers-div';
    card.innerHTML = `
    <div>
        <h3 class = 'num'>${num}</h3>
        <h2 class = "white"> ${skill}</h2>
        <p class = "brown">${skillTxt}</p>
    </div>
    
         

    
       
    `;
    serviceContainer.appendChild(card);
});


const scrollStep = 370;


document.querySelector('.scrollLeft').addEventListener('click', () => {
    serviceContainer.scrollBy({ top: 0, left: -scrollStep, behavior: 'smooth' });
    console.log('Scrolling left');
});

// Scroll right button
document.querySelector('.scrollRight').addEventListener('click', () => {
    serviceContainer.scrollBy({ top: 0, left: scrollStep, behavior: 'smooth' });
    console.log('Scrolling right');
});







const allSkills = document.getElementById('skill-flex');


const skillsData = skillData.filter(item => item.skill && item.src && item.ratingTxt && item.instiution && item.Description);

console.log(newData);

skillsData.forEach(({ skill, src, ratingTxt, instiution, Description}) => {
    const skil = document.createElement('skil-con');
    skil.className = 'skil-con';
    skil.innerHTML = `
        <div class = "skill-head">
                    <h1>${skill}</h1>
                    
                </div>

                <p class = "skillp1">${instiution}</p>

                <p class = "skillp2 white">${Description}</p>
         `;
    allSkills.appendChild(skil);
});


