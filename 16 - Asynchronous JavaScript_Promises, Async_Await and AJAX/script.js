"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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
  // countriesContainer.style.opacity = "1";
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforebegin", msg);
  // countriesContainer.style.opacity = 1;
};

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
*/

/*
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

const request = fetch("https://restcountries.com/v3.1/name/serbia");
console.log(request);


function getCountryData(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    });
}

getCountryData("portugal");

function getCountryData(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      (response) => response.json(),
      (err) => alert(err)
    )
    .then((data) => {
      const neighbor = data[0].borders?.[0];

      renderCountry(data[0]);

      if (!neighbor) return;

      return fetch(
        `https://restcountries.com/v3.1/alpha/${neighbor.toLowerCase()}`
      );
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], "neighbour"));
}

// cak iako ne vratimo nista iz .then() metode ona ce uvek vratiti promis. Medjutim ako ipak vratimo neku vrednost iz .then() metode ta vrednost ce postati fullfillment vrednost tog promisa! Ako bi iz druge .then() metode vratili npr broj 23 onda bi u trecoj .then() metodi response bio zapravo taj broj 23. Dakle sta god vratili iz .then() metode to sto vracamo postaje fulfillment vrednost tog promisa koji vraca.


function getCountryData(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      const neighbor = "blabla";

      renderCountry(data[0]);

      if (!neighbor) return;

      return fetch(
        `https://restcountries.com/v3.1/alpha/${neighbor.toLowerCase()}`
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Neighbour country not found! ${response.status}`);
      }
      return response.json();
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((error) => {
      renderError(`Something went wrong 💥💥💥. ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener("click", function () {
  getCountryData("spain");
});



function getJSON(url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(errorMsg);
    }

    return response.json();
  });
}

function getCountryData(country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      const neighbor = data[0].borders?.[0];

      renderCountry(data[0]);

      if (!neighbor) {
        throw new Error(`There is no neighbour country for ${country}`);
      }

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor.toLowerCase()}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((error) => {
      renderError(`Something went wrong 💥💥💥. ${error.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener("click", function () {
  getCountryData("australia");
});

*/
