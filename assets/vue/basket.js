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
    loadSumme: function () {
      let total = 0;
      this.basket.forEach((item) => {
        total += item.preis
   });
      return total;
    },
    removeWholeBasket: function () {
      this.basket.forEach((item) => {
        this.remove(item);
   });
    },
  },
  template: '\n    <div class="container">\n    <h2 class="mt-4">Ihr Einkauswagen</h2>\n      <table class="table table-bordered mt-4">\n          <tr v-for="(item,index) in basket">\n              <td class="text-white">\n                  {{ item.titel}}\n              </td>\n              <td class="text-white">\n                  {{ item.preis}} &euro;\n              </td>\n              <td>\n              <span class="ml-2 btn btn-outline-primary" @click="remove(index)">Entfernen</span>\n              </td>\n          </tr>\n      </table>\n  <div class="text-white"> Summe: {{loadSumme()}} €</div>    <router-link class="btn btn-light mr-5" to="/">Weiter einkaufen</router-link>\n  <a href="/Ordered" type="button" class="btn btn-light mr-5 " @click="removeWholeBasket()">Bestellung abschließen </a>  \n      </div>\n      ',
};
