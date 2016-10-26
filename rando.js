/**
 * Returns a random number between 0 and 30.
 * @returns {number} Random number.
 */
const getRandom = (max) => {
  return Math.floor(Math.random() * max);
}

/**
 * Listing all the arrays.
 * @file rando.js
 */

const array = [
  'Twilight Gap',
  'Rusted Lands',
  'Exodus Blue',
  'Widows Court',
  'Bannerfall',
  'Frontier',
  'Memento',
  'First Light',
  'Anomaly',
  'The Cauldron',
  'Firebase Delphi',
  'Blind Watch',
  'Pantheon',
  'Black Shield',
  'Crossroads',
  'Skyline',
  'Shores of Time',
  'Asylum',
  'Thieves Den',
  'The Timekeeper',
  'Last Exit',
  'Floating Gardens',
  'Burning Shrine',
  'Vertigo',
  'The Drifter',
  'The Dungeons',
  'Cathedral of Dust',
];

//Logging results in the console.

module.exports = () => {
  return (array[getRandom(array.length)]);
}; 