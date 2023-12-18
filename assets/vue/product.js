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
              <div class="mt-2" v-for="product in this.products">
                  <div class="h4">{{ product.titel }}</div>
                  <div class="d-flex justify-content-between">
                      <div>
                          <span class="h6"> {{ product.preis }} &euro;</span>
                          <span :id="product.id" class="ml-2 btn btn-outline-primary" @click="order">In den Warenkorb</span>
                      </div>
                  </div>
              </div>
          
          <router-link class="btn btn-primary" to="/basket">To Shopping Basked</router-link>
      </div>`,
  };
  