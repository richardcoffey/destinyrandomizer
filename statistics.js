const destiny = require('destiny-client')('84445f639c1f45c5ae4341957eaeef74')



return new Promise((resolve, reject) => {
  destiny.Search({
    membershipType: 1,
    name: "CoffeyClan",
  })
  .then((users) => {
    destiny.Account({
      membershipType: 1,
      membershipId: users[0].membershipId,
    }).then((accounts) => {
      console.log(accounts);
    }).catch((error) => reject(error));
  }).catch((error) => reject(error));
});
