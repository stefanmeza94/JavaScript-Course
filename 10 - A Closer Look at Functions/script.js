"use strict";

// Default parametri: pre ES6 koristili bi short circuiting da dodelimo neke default vrednosti varijablama, medjutim sa ES6 sada to mozemo da cinimo dikretno kod parametara funkcije stavljajuci operator =
// Dobra stvar kod ovih parametara je sto mozemo da koristimo bilo koji expression cak mozemo da koristimo i druge parametre ako su vec definisani, npr kod price-a mozemo da koristimo flightNum ili numPassengers posto su definisani ispred price-a,
const bookings = [];

const createBooking = function (
  flightNum = 1,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 nacin za default parametre
  // flightNum = flightNum || 1;
  // numPassengers = numPassengers || "N20";
  // price = price || 29;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(bookings);
};

createBooking("LH143");
createBooking("LH143", 2, 800);
createBooking("LH143", 2);
createBooking("LH143", 5);

// Prvi argument ce uvek da bude mapiran na prvi parametar, kao i drugi argument koji ce uvek biti mapiran na drugi parametar

// Ono sto ne mozemo da radimo jeste da izostavimo npr srednji argument prilikom pozivanja funkcije, posto ih js stavlja redom, ali jedan zgodan trick za to jeste da za taj argument koji zelimo da izostavimo (tj zelimo npr da se ucita njegova default vrednost) mozemo da prosledimo na tom mestu undefined, to je isto kao da nismo prosledili nista za taj argument i bice ocitana njegova default vrednost!
createBooking("LH123", undefined, 1000);
