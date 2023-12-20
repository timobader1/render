export default {
    data() {
      return {
        products: [],
        om: "",
      };
    },
    created() {
      let url = new URL(origin + "/api/product");
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.products = data));
    },
    methods: {
      order: function (event) {
        let url = new URL(origin + "/api/basket");
        let data = new FormData();
        data.append("id", event.target.id);
        fetch(url, {
          method: "POST",
          body: data,
        }).then((result) => {
          this.$router.push("/basket");
        });
      },
    },
    template: `
      <div class="container">
          <span class="h1">Produkte</span>
          <hr>
          <table class="table mt-4">
          <thead>
          <tr>
                <th class="text-left">Titel</th>
                <th class="text-left">Beschreibung</th>
           
                <th class="text-left">Preis</th>
                <th class="text-left">Modell</th>
                <th class="text-left">Kategorie</th>
                <th class="text-center">Warenkorb</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="product in this.products">
            <td>
            {{ product.titel }}
            </td>
            <td>
            {{ product.beschreibung }}
            </td>
            
            <td>
            {{ product.preis }}
            </td>
            <td>
            {{ product.carmodel.name }}
            </td>
             <td>
             {{ product.category.name }}
             </td>
             <td>
             <span :id="product.id" class="ml-2 btn btn-outline-primary" @click="order">Zum Warenkorb hinzufügen</span>
             </td>
            </tbody>
            </table>
      </div>`,
  };
  