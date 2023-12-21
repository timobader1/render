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
          <h1>Produkte</h1>
          <hr>
          <table class="table table-bordered mt-4">
          <thead>
          <tr>
                <th>Titel</th>
                <th>Beschreibung</th>
           
                <th>Preis</th>
                <th>Modell</th>
                <th>Kategorie</th>
                <th>Warenkorb</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="product in this.products">
            <td class="align-middle">
            {{ product.titel }}
            </td>
            <td class="align-middle">
            {{ product.beschreibung }}
            </td>
            
            <td class="align-middle">
            {{ product.preis }}
            </td>
            <td class="align-middle">
            {{ product.carmodel.name }}
            </td>
             <td class="align-middle">
             {{ product.category.name }}
             </td>
             <td>
             <span :id="product.id" class="ml-2 btn btn-outline-primary" @click="order">Zum Warenkorb hinzufügen</span>
             </td>
            </tbody>
            </table>
      </div>`,
  };
  