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
              { titel:"Rotiform DTM 8,5x19 5/112 ET45", beschreibung:"Silber, 1x Felge",image:"2c689af9-9beb-493b-948e-837701dcbe41.webp",preis:"375",carmodel: golf.id, category: felgen.id},
              { titel:"SRS-Tec Kotflügel GT vorne", beschreibung:"2,5 cm verbreiter, TÜV-Gutachten",image:"938d4c95-74bf-4b59-9507-8fd9004a2f48.webp",preis:"469",carmodel: scirocco.id, category: karosserieteile.id},
              { titel:"TURBOSYSTEMS TURBOLADER", beschreibung:"Bis 600 P",image:"21f2e8b3-fd44-45fd-b1c1-bea094c16c3d.webp",preis:"2199",carmodel: dreier.id, category: aufladung.id},
              { titel:"Remus Cat-Back-Anlage RACING", beschreibung:"Mit Klappe",image:"d42d7532-3620-4d8a-813d-6bc37327d629.webp",preis:"2256",carmodel: fuenfer.id, category: abgasanlage.id},
              { titel:"4x NGK ZÜNDKERZE", beschreibung:"Nickel-Mittelelektrode",image:"1a9dfb00-0237-42d1-a636-cc01c13c8af0.webp",preis:"20",carmodel: a4.id, category: elektrik.id},
              { titel:"Fußmatten mit Nubukeinfassung", beschreibung:"Passgenau",image:"ec05e65b-a4d7-45b1-bbb2-8a01d3207845.webp",preis:"96",carmodel: gt3rs.id, category: innenausstattung.id},
              { titel:"Komplettmotor", beschreibung:"4700 km gelaufen",image:"6d5df6a5-b8ab-480b-9e77-6863b9d9a9f4.webp",preis:"37500",carmodel: gt2rs.id, category: motor.id},
              { titel:"Twin Turbo Kit", beschreibung:" bis zu 1000 PS und ca. 1000 Nm",image:"6e69a6d4-614e-4f7b-b623-3b4ab76ac3f4.webp",preis:"38990",carmodel: r8.id, category: aufladung.id},
              { titel:"Motorhaube", beschreibung:"schwarz",image:"928ac456-1772-4231-8eab-4a1df59381e8.webp",preis:"100",carmodel: a2.id, category: karosserieteile.id},
              ])
            }
          
  
  
  
        
        
        
  };
  