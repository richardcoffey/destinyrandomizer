/**
 * Number generator.
 * @file convo.js
 */
const genRandom = (max) => {
  return Math.floor(Math.random() * max);
}

//Creating the array.

const con = [
  'Please kill me.',
  'Take me now.',
  'Whats her name?',
  'I detect an impurity.',
  'You are not a true harambian.',
  'Love you too.',
  'Why do you guys hate me?',
  'RIP Lydia 2016.',
  'They were coming from all directions!',
];

//Exporting all the conversation possibilities.

module.exports = () => {
  return(con[genRandom(con.length)]);
};