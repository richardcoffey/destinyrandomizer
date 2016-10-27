/**
 * Number generator.
 * @file convo.js
 */
const genRandom = (max) => {
  return Math.floor(Math.random() * max);
}

//Creating the array.

const con = [
  'I must die',
  'Please kill me',
  'I want to die',
  'Take me now',
];

//Exporting all the conversation possibilities.

module.exports = () => {
  return(con[genRandom(con.length)]);
};