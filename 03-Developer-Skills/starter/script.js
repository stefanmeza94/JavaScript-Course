// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 12, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = curTemp;
    if (curTemp > max) {
      max = curTemp;
    } else if (curTemp < min) {
      min = curTemp;
    }
  }
};

calcTempAmplitude(temperatures);
