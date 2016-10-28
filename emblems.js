/**
 * @file emblemss.js
 * Creating a function for the slackbot that shows the emblem of the defined person. 
 */

const destiny = require('destiny-client')(process.env.DESTINY_API_KEY)

/**
 * Resolves HTML for game page.
 * @returns {object} Promise object.
 */

module.exports = (inputUser) => {
  return new Promise((resolve, reject) => {
    destiny.Search({
      membershipType: 1,
      name: inputUser,
    })
    .then((users) => {
      destiny.Account({
        membershipType: 1,
        membershipId: users[0].membershipId
      })
      .then((account) => {
        let html = ``;
        for (let key in account.characters) {
          html += ` http://www.bungie.net${account.characters[key].emblemPath} `
        }
        resolve(html);
      }).catch((error) => reject(error));
    }).catch((error) => reject(error));
  });
};