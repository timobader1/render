/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  if (await User.count() > 0) {
    return;
    }
    
    await User.createEach([
    { emailAddress: 'ti261bad@htwg-konstanz.de', fullName: 'Timo Bader', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('test123') },
    { emailAddress: 'pa741pel@htwg-konstanz.de', fullName: 'Patrick Peltzer', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('test456') },
    { emailAddress: 'benutzer@mail.de', fullName: 'Benutzer', isSuperAdmin: false, password: await sails.helpers.passwords.hashPassword('test789') },
    { emailAddress: 'seller@mail.de', fullName: 'Seller', isSellerOrAdmin: true, password: await sails.helpers.passwords.hashPassword('test135') },
    ])
};
