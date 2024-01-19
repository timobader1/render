export default {
  data: () => ({basket: []}),
  created () {
    this.loadBasket ();
  },
  methods: {
    remove: function (t) {
      let e = new URL (origin + '/api/basket'), n = new FormData ();
      n.append ('index', t), fetch (e, {method: 'DELETE', body: n}).then (t => {
        this.loadBasket ();
      });
    },
    loadBasket: function () {
      let t = new URL (origin + '/api/basket');
      fetch (t).then (t => t.json ()).then (t => (this.basket = t.basket));
    },
  },
  template: '\n    <div class="container">\n    <h2 class="mt-4">Ihr Einkauswagen</h2>\n      <table class="table table-bordered mt-4">\n          <tr v-for="(item,index) in basket">\n              <td class="text-white">\n                  {{ item.titel}}\n              </td>\n              <td class="text-white">\n                  {{ item.preis}} &euro;\n              </td>\n              <td>\n              <span class="ml-2 btn btn-outline-primary" @click="remove(index)">Entfernen</span>\n              </td>\n          </tr>\n      </table>\n      <router-link class="btn btn-secondary mr-5" to="/">Weiter einkaufen</router-link>\n      <router-link class="btn btn-light" to="/">Bestellung abschliessen</router-link>\n      </div>\n      ',
};
