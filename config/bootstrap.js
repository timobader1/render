module.exports.bootstrap = async function () {
  0 == (await User.count ()) &&
    (await User.createEach ([
      {
        emailAddress: 'ti261bad@htwg-konstanz.de',
        fullName: 'Timo Bader',
        isSuperAdmin: !0,
        password: await sails.helpers.passwords.hashPassword ('test123'),
      },
      {
        emailAddress: 'pa741pel@htwg-konstanz.de',
        fullName: 'Patrick Peltzer',
        isSuperAdmin: !0,
        password: await sails.helpers.passwords.hashPassword ('test456'),
      },
      {
        emailAddress: 'benutzer@mail.de',
        fullName: 'Benutzer',
        isSuperAdmin: !1,
        password: await sails.helpers.passwords.hashPassword ('test789'),
      },
      {
        emailAddress: 'seller@mail.de',
        fullName: 'Seller',
        isSellerOrAdmin: !0,
        password: await sails.helpers.passwords.hashPassword ('test135'),
      },
    ])), 0 == (await CarBrand.count ()) &&
    (await CarBrand.createEach ([
      {name: 'VW'},
      {name: 'BMW'},
      {name: 'Mercedes'},
      {name: 'Porsche'},
      {name: 'Audi'},
      {name: 'Ford'},
      {name: 'Nissan'},
      {name: 'Subaru'},
      {name: 'Opel'},
      {name: 'Kia'},
    ]));
  let a = await CarBrand.findOne ({name: 'VW'}),
    e = await CarBrand.findOne ({name: 'BMW'}),
    i = (await CarBrand.findOne ({name: 'Mercedes'}), await CarBrand.findOne ({
      name: 'Porsche',
    })),
    r = await CarBrand.findOne ({name: 'Audi'});
  0 == (await CarModel.count ()) &&
    (await CarModel.createEach ([
      {name: 'Golf', carbrand: a.id},
      {name: 'Scirocco', carbrand: a.id},
      {name: '3er', carbrand: e.id},
      {name: '5er', carbrand: e.id},
      {name: 'A4', carbrand: r.id},
      {name: '911 GT3 RS', carbrand: i.id},
      {name: '911 GT2 RS', carbrand: i.id},
      {name: 'R8', carbrand: r.id},
      {name: 'A2', carbrand: r.id},
    ])), 0 == (await Category.count ()) &&
    (await Category.createEach ([
      {name: 'Felgen'},
      {name: 'Karosserieteile'},
      {name: 'Aufladung'},
      {name: 'Abgasanlage'},
      {name: 'Elektrik'},
      {name: 'Innenausstattung'},
      {name: 'Motor'},
    ]));
  let n = await Category.findOne ({name: 'Felgen'}),
    d = await Category.findOne ({name: 'Karosserieteile'}),
    t = await Category.findOne ({name: 'Aufladung'}),
    s = await Category.findOne ({name: 'Abgasanlage'}),
    o = await Category.findOne ({name: 'Elektrik'}),
    m = await Category.findOne ({name: 'Innenausstattung'}),
    c = await Category.findOne ({name: 'Motor'}),
    l = await CarModel.findOne ({name: 'Golf'}),
    b = await CarModel.findOne ({name: 'Scirocco'}),
    w = await CarModel.findOne ({name: '3er'}),
    g = await CarModel.findOne ({name: '5er'}),
    u = await CarModel.findOne ({name: 'A4'}),
    f = await CarModel.findOne ({name: '911 GT3 RS'}),
    p = await CarModel.findOne ({name: '911 GT2 RS'}),
    h = await CarModel.findOne ({name: 'R8'}),
    C = await CarModel.findOne ({name: 'A2'});
  0 == (await Product.count ()) &&
    (await Product.createEach ([
      {
        titel: 'Rotiform DTM 8,5x19 5/112 ET45',
        beschreibung: 'Silber, 1x Felge',
        image: '2c689af9-9beb-493b-948e-837701dcbe41.webp',
        preis: '375',
        carmodel: l.id,
        category: n.id,
      },
      {
        titel: 'SRS-Tec Kotflügel GT vorne',
        beschreibung: '2,5 cm verbreiter, TÜV-Gutachten',
        image: '938d4c95-74bf-4b59-9507-8fd9004a2f48.webp',
        preis: '469',
        carmodel: b.id,
        category: d.id,
      },
      {
        titel: 'TURBOSYSTEMS TURBOLADER',
        beschreibung: 'Bis 600 P',
        image: '21f2e8b3-fd44-45fd-b1c1-bea094c16c3d.webp',
        preis: '2199',
        carmodel: w.id,
        category: t.id,
      },
      {
        titel: 'Remus Cat-Back-Anlage RACING',
        beschreibung: 'Mit Klappe',
        image: 'd42d7532-3620-4d8a-813d-6bc37327d629.webp',
        preis: '2256',
        carmodel: g.id,
        category: s.id,
      },
      {
        titel: '4x NGK ZÜNDKERZE',
        beschreibung: 'Nickel-Mittelelektrode',
        image: '1a9dfb00-0237-42d1-a636-cc01c13c8af0.webp',
        preis: '20',
        carmodel: u.id,
        category: o.id,
      },
      {
        titel: 'Fußmatten mit Nubukeinfassung',
        beschreibung: 'Passgenau',
        image: 'ec05e65b-a4d7-45b1-bbb2-8a01d3207845.webp',
        preis: '96',
        carmodel: f.id,
        category: m.id,
      },
      {
        titel: 'Komplettmotor',
        beschreibung: '4700 km gelaufen',
        image: '6d5df6a5-b8ab-480b-9e77-6863b9d9a9f4.webp',
        preis: '37500',
        carmodel: p.id,
        category: c.id,
      },
      {
        titel: 'Twin Turbo Kit',
        beschreibung: ' bis zu 1000 PS und ca. 1000 Nm',
        image: '6e69a6d4-614e-4f7b-b623-3b4ab76ac3f4.webp',
        preis: '38990',
        carmodel: h.id,
        category: t.id,
      },
      {
        titel: 'Motorhaube',
        beschreibung: 'schwarz',
        image: '928ac456-1772-4231-8eab-4a1df59381e8.webp',
        preis: '100',
        carmodel: C.id,
        category: d.id,
      },
    ]));
};
