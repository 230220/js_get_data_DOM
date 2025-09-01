'use strict';

// write your code here
const populationsElem = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationsArray = [...populationsElem];

const populations = populationsArray.map((el) => {
  const text = el.textContent;
  const cleaned = text.replace(/,/g, '');

  return parseInt(cleaned, 10);
});
const total = populations.reduce((acc, num) => acc + num, 0);
const average = Math.round(total / populations.length);

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
