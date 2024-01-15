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
  if (await User.count() == 0) {
    await User.createEach([
      { emailAddress: 'ti261bad@htwg-konstanz.de', fullName: 'Timo Bader', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('test123') },
      { emailAddress: 'pa741pel@htwg-konstanz.de', fullName: 'Patrick Peltzer', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('test456') },
      { emailAddress: 'benutzer@mail.de', fullName: 'Benutzer', isSuperAdmin: false, password: await sails.helpers.passwords.hashPassword('test789') },
      { emailAddress: 'seller@mail.de', fullName: 'Seller', isSellerOrAdmin: true, password: await sails.helpers.passwords.hashPassword('test135') },
      ])
    }

    if (await CarBrand.count() == 0) {
      await CarBrand.createEach([
        { name: 'VW'},{ name: 'BMW'},{ name: 'Mercedes'},{ name: 'Porsche'},{ name: 'Audi'},{ name: 'Ford'},{ name: 'Nissan'},{ name: 'Subaru'},{ name: 'Opel'},{ name: 'Kia'},
        ])
      }

      let vw = await CarBrand.findOne({name: "VW"});
      let bmw = await CarBrand.findOne({name: "BMW"});
      let mercedes = await CarBrand.findOne({name: "Mercedes"});
      let porsche = await CarBrand.findOne({name: "Porsche"});
      let audi = await CarBrand.findOne({name: "Audi"});

      if (await CarModel.count() == 0) {
        await CarModel.createEach([
          { name:"Golf",carbrand: vw.id},
          { name:"Scirocco",carbrand: vw.id},
          { name:"3er",carbrand: bmw.id},
          { name:"5er",carbrand: bmw.id},
          { name:"A4",carbrand: audi.id},
          { name:"911 GT3 RS",carbrand: porsche.id},
          { name:"911 GT2 RS",carbrand: porsche.id},
          { name:"R8",carbrand: audi.id},
          { name:"A2",carbrand: audi.id},
          ])
        }

        if (await Category.count() == 0) {
          await Category.createEach([
            { name:"Felgen"},{ name:"Karosserieteile"},{ name:"Aufladung"},{ name:"Abgasanlage"},{ name:"Elektrik"},{ name:"Innenausstattung"},{ name:"Motor"},
            
            ])
          }

        let felgen = await Category.findOne({name: "Felgen"});
        let karosserieteile = await Category.findOne({name: "Karosserieteile"});
        let aufladung = await Category.findOne({name: "Aufladung"});
        let abgasanlage = await Category.findOne({name: "Abgasanlage"});
        let elektrik = await Category.findOne({name: "Elektrik"});
        let innenausstattung = await Category.findOne({name: "Innenausstattung"});
        let motor = await Category.findOne({name: "Motor"});
        
        let golf = await CarModel.findOne({name: "Golf"});
        let scirocco = await CarModel.findOne({name: "Scirocco"});
        let dreier = await CarModel.findOne({name: "3er"});
        let fuenfer = await CarModel.findOne({name: "5er"});
        let a4 = await CarModel.findOne({name: "A4"});
        let gt3rs = await CarModel.findOne({name: "911 GT3 RS"});
        let gt2rs = await CarModel.findOne({name: "911 GT2 RS"});
        let r8 = await CarModel.findOne({name: "R8"});
        let a2 = await CarModel.findOne({name: "A2"});

        if (await Product.count() == 0) {
          await Product.createEach([
            { titel:"Rotiform DTM 8,5x19 5/112 ET45", beschreibung:"Silber, 1x Felge",image:"0361e291-1fce-4805-b54d-4082a80f87cf.png",preis:"375",carmodel: golf.id, category: felgen.id},
            { titel:"SRS-Tec Kotflügel GT vorne", beschreibung:"2,5 cm verbreiter, TÜV-Gutachten",image:"5cd2ff43-74be-4d62-b515-bc1e5b05e0f9.png",preis:"469",carmodel: scirocco.id, category: karosserieteile.id},
            { titel:"TURBOSYSTEMS UPGRADE TURBOLADER", beschreibung:"Bis 600 P",image:"09c39bcf-b85b-459c-bad0-5f616f6af0be.webp",preis:"2199",carmodel: dreier.id, category: aufladung.id},
            { titel:"Remus Cat-Back-Anlage RACING", beschreibung:"Mit Klappe",image:"d1c6d7b6-c22e-47c6-9878-c36ff986e169.jpg",preis:"2256",carmodel: fuenfer.id, category: abgasanlage.id},
            { titel:"4x NGK ZÜNDKERZE", beschreibung:"Nickel-Mittelelektrode",image:"32c19213-f1ff-4612-a79e-ce484e526304.jpg",preis:"20",carmodel: a4.id, category: elektrik.id},
            { titel:"Fußmatten mit Nubukeinfassung", beschreibung:"Passgenau",image:"ed191b7f-4b04-4972-98a9-5d4748e4c060.jpg",preis:"96",carmodel: gt3rs.id, category: innenausstattung.id},
            { titel:"Komplettmotor", beschreibung:"4700 km gelaufen",image:"91a73cdc-6a29-4447-a0d7-c3c4ef6cd02d.jpg",preis:"37500",carmodel: gt2rs.id, category: motor.id},
            { titel:"Twin Turbo Kit", beschreibung:" bis zu 1000 PS und ca. 1000 Nm",image:"a417b9dd-9fa5-433a-9d69-23a60d5db480.jpg",preis:"38990",carmodel: r8.id, category: aufladung.id},
            { titel:"Motorhaube", beschreibung:"schwarz",image:"882beba6-b531-458e-b245-1147fb46bc5d.jpg",preis:"100",carmodel: a2.id, category: karosserieteile.id},
            ])
          }
        



      
      
      
};
