"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
/*

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    const html = `<article class="country">
                    <img class="country__img" src="${data.flags.png}" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name.common}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${
                          data.population
                        }</p>
                        <p class="country__row"><span>🗣️</span>${
                          data.languages.srp
                        }</p>
                        <p class="country__row"><span>💰</span>${
                          country === "serbia"
                            ? data.currencies.RSD.name
                            : data.currencies.EUR.name
                        }</p>
                    </div>
                </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = "1";
  });
};

getCountryData("serbia");
getCountryData("portugal");



const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
                    <img class="country__img" src="${data.flags.png}" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name.common}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>👫</span>${(
                          Number(data.population) / 1000000
                        ).toFixed(1)}M</p>
                        <p class="country__row"><span>🗣️</span>${
                          data.languages[
                            data.name.common.slice(0, 3).toLowerCase()
                          ]
                        }</p>
                        <p class="country__row"><span>💰</span>${
                          data.currencies?.EUR?.name
                        }</p>
                    </div>
                </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = "1";
};

const getCountryAndNeighbor = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    // render country 1
    renderCountry(data);

    // get neighbor country
    const neighbor = data.borders?.[0];

    // if country is island there is no border country
    if (!neighbor) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      `https://restcountries.com/v3.1/alpha/${neighbor.toLowerCase()}`
    );
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);

      renderCountry(data2, "neighbour");
    });
  });
};

getCountryAndNeighbor("oman");

// Callback hell je zapravo kada imamo dosta nestovanih callback funkcija kako bi izvrsili async operacije redom. Ovo cini nas kod jako necitiljvim i losim za odrzavanje, tako da se izbegava.
// Problem koji smo opisali u gornoj recenici moze da es vidi na gornjem primeru, gde smo prvo napravili async poziv za prvu drzavu, pa smo u callback funckjiji gde handlujemo rezultat tog poziva napravili jos jedan poziv za drugu drzavu, pa bi sad u njegovoj callback funkciji pravili treci pozive i tako redom. Na sledecem primeru se to bolje vidi:

setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 second passed");
    setTimeout(() => {
      console.log("3 second passed");
      setTimeout(() => {
        console.log("4 second passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// callback hell moze da se prepozna po ovom trinaglu koji se pravi kako identujemo ka unutra svoj kod kroz callback funkcije. Resenje za taj callback hell jeste da koristmo nesto sto se zove promises.
*/
