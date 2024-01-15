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
        
          <div div class="row">
              <div class="col-lg-4 col-md-6 mb-4" v-for="product in this.products">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{{ product.titel }}</h5>
                    
                    <img :src="'https://wetebucket.s3.us-west-2.amazonaws.com/' + product.image" alt="Bild nicht gefunden" style="width:200px"/>
                    <p class="card-text text-black">Preis: {{ product.preis }}$</p>
                    <p class="card-text text-black">{{ product.beschreibung }}</p>
                    <p class="card-text text-black">Kategorie: {{ product.category.name }}</p>
                    <span :id="product.id" class="ml-2 btn btn-outline-primary" @click="order">Zum Warenkorb hinzufügen</span>
                  </div>
                </div>
              </div>
            </div>
      </div>`,
  };
  