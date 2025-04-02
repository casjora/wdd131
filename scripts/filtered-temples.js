const mainnav =document.querySelector('.navigation');
const hammbutton=document.querySelector('#menu');

hammbutton.addEventListener('click',()=>{
    mainnav.classList.toggle('show');
    hammbutton.classList.toggle('show');
})

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Tegucigalpa Honduras",
        location: "Tegucigalpa, Honduras",
        dedicated: "2013, March, 17",
        area: 28254,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-28641.jpg"
      },
      {
        templeName: "San Jose Costa Rica",
        location: "Heredia, Costa Rica",
        dedicated: "2000, June, 4",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/087-San-Jos%C3%A9-Costa-Rica-Temple.jpg"
      },
      {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14-16",
        area: 11610,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6415-main.jpg"
      },
  ];

createTemplecard();

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

oldLink.addEventListener("click",(event)=>{
    event.preventDefault();
    cleanCards();
    let oldtemples = temples.filter(temple => parseInt(temple.dedicated)<1900);
    createTemplecard(oldtemples);

})

newLink.addEventListener("click",(event)=>{
    event.preventDefault();
    cleanCards();
    let oldtemples = temples.filter(temple => parseInt(temple.dedicated)>2000);
    createTemplecard(oldtemples);

})

largeLink.addEventListener("click",(event)=>{
    event.preventDefault();
    cleanCards();
    let oldtemples = temples.filter(temple => parseInt(temple.area)>90000);
    createTemplecard(oldtemples);

})

smallLink.addEventListener("click",(event)=>{
    event.preventDefault();
    cleanCards();
    let oldtemples = temples.filter(temple => parseInt(temple.area)<10000);
    createTemplecard(oldtemples);

})

function cleanCards (){
    document.querySelector(".img-container").innerHTML="";
} 

function createTemplecard(filteredTemples=temples){
    filteredTemples.forEach(temple =>{
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent =temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src",temple.imageUrl);
        img.setAttribute("alt",temple.templeName);
        img.setAttribute("loading","lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".img-container").appendChild(card);
    })
}
