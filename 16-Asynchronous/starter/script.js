'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// // XMLHTTPRequest

// function getCountries(code) {

//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/alpha/${code}`);
//     request.send();

//     request.addEventListener('load', function () {
//         // console.log(this.responseText);
//         const data = JSON.parse(this.responseText);
//         // console.log(data);

//         renderCountry(data);
//     })
// }


function renderCountry(data,className='') {
    let html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}m people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
            </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

function getCountries(code){
    
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then(res => res.json())
        .then(data => {
            renderCountry(data);
            const neighbour = data.borders[0];
            if(!neighbour)return;

            return fetch(`https://restcountries.eu/rest/v2/alphaa/${neighbour}`);
        })
        .then(res => res.json())
        .then(data=>renderCountry(data,'neighbour'))
        .catch(err =>console.log(err));
}
//async await version
async function getCountries1(code) {
  try {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`).then(res => res.json());
    renderCountry(res)
    // console.log(res);
  }catch(err){
    console.log(err.message);
  }  
}

getCountries1('aus')

btn.addEventListener('click',function(){
  getCountries('in');
})

// getCountries('in');
// getCountries('aus');
// getCountries('co');
// getCountries('cn');
// getCountries('cn');



// 
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}?fullText=true`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// // whereAmI(52.508, 13.381);
// whereAmI(17.501905747468268, 78.3137196858249);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);


