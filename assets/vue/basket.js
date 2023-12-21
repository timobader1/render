export default {
  data() {
    return {
      basket: [],
    };
  },
  created() {
    this.loadBasket();
  },
    methods: {
      remove: function (index) {
        let url = new URL(origin + "/api/basket");
        let data = new FormData();
        data.append("index", index);
        fetch(url, {
          method: "DELETE",
          body: data,
        }).then((result) => {
          this.loadBasket();
        });
      },
      loadBasket: function() {
        let url = new URL(origin + '/api/basket');
      fetch(url)
      .then(res => res.json())
      .then(data => this.basket = data.basket)
      }
    },  
    template: `
    <div class="container">
    <h2 class="mt-4">Ihr Einkauswagen</h2>
      <table class="table table-bordered mt-4">
          <tr v-for="(item,index) in basket">
              <td class="text-white">
                  {{ item.titel}}
              </td>
              <td class="text-white">
                  {{ item.preis}} &euro;
              </td>
              <td>
              <span class="ml-2 btn btn-outline-primary" @click="remove(index)">Entfernen</span>
              </td>
          </tr>
      </table>
      <router-link class="btn btn-secondary mr-5" to="/">Weiter einkaufen</router-link>
      <router-link class="btn btn-light" to="/">Bestellung abschliessen</router-link>
      </div>
      `,
  };
  