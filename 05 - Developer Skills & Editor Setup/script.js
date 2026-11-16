// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcTempAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


1) Challenge

function printForecast(arr) {
  let str = '...';

  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}* in ${i+1} days ...`;
  }

  console.log(str);
}

// printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

*/

// challenge 2

function calculateWeeklyHours(dailyHours) {
    const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

    const daysWorked = dailyHours.filter(hours => hours > 0).length;

    const averageDailyHours = daysWorked > 0
        ? totalHours / daysWorked
        : 0;

    const mostHours = Math.max(...dailyHours);
    const dayWithMostHours = dailyHours.indexOf(mostHours);

    const isFullTime = totalHours >= 35;

    const days = [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"
    ];

    return {
        totalHours,
        averageDailyHours: Number(averageDailyHours.toFixed(2)),
        dayWithMostHours: days[dayWithMostHours],
        daysWorked,
        isFullTime
    };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

console.log(calculateWeeklyHours(weeklyHours));
