export default {
  data: () => ({products: [], om: ''}),
  created () {
    let t = new URL (origin + '/api/product');
    fetch (t).then (t => t.json ()).then (t => (this.products = t));
  },
  methods: {
    order: function (t) {
      let e = new URL (origin + '/api/basket'), a = new FormData ();
      a.append ('id', t.target.id), fetch (e, {
        method: 'POST',
        body: a,
      }).then (t => {
        this.$router.push ('/basket');
      });
    },
  },
  template: '\n      <div class="container">\n          <h1>Produkte</h1>\n          <hr>\n        \n          <div div class="row">\n              <div class="col-lg-4 col-md-6 mb-4" v-for="product in this.products">\n                <div class="card">\n                  <div class="card-body">\n                    <h5 class="card-title">{{ product.titel }}</h5>\n                    \n                    <img :src="\'https://wetebucket.s3.us-west-2.amazonaws.com/\' + product.image" alt="Bild nicht gefunden" style="height:200px"/>\n                    <p class="card-text text-black">Preis: {{ product.preis }}$</p>\n                    <p class="card-text text-black">{{ product.beschreibung }}</p>\n                    <p class="card-text text-black">Kategorie: {{ product.category.name }}</p>\n                    <p class="card-text text-black">{{ product.carmodel.carbrand.name }} {{ product.carmodel.name }}</p>\n                    <span :id="product.id" class="ml-2 btn btn-outline-primary" @click="order">Zum Warenkorb hinzufügen</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </div>',
};
