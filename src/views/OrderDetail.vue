<template>
  <div>
    <!-- <test :tableRows="lines" /> -->
    <!-- <p v-for="(value, i) in getOrderlines" :key="i">
      {{ value.id }} {{ value.linetotal }}
    </p> -->
    <!-- <div v-for="order in orders" :key="order.id">
      <div>
        {{ order.id }} {{ order.collection }} {{ order.timestamp }}
        {{ order.season }}
      </div>
    </div>
    <div>{{ searchOrderLine() }}</div> -->
  </div>
</template>

<script>
// import test from "@/components/cards/test.vue";
import OrderLines from "@/services/OrderLines.js";
import Orders from "@/services/Orders.js";
export default {
  components: {
    // test,
  },
  data() {
    return {
      lines: [],
      orders: [],
    };
  },
  methods: {
    OrderlineObject(orderline) {
      const id = orderline.orderline;
      const products = orderline.products;
      let productLines = [];
      let productDetails = [];
      products.forEach((product) => productLines.push(product.netLineAmount));
      products.forEach((product) => {
        let completeProduct = product.product;
        if (product.quantity !== null && product.quantity != "") {
          completeProduct.quantity = product.quantity;
        }
        if (product.netLineAmount !== null && product.netLineAmount != "") {
          completeProduct.quantity = product.netLineAmount;
        }
        productDetails.push(completeProduct);
      });
      let linetotal = productLines.reduce((prev, next) => prev + next, 0);
      const newLineObject = {
        id,
        productDetails,
        linetotal,
      };
      return newLineObject;
      // console.log(newLineObject);
    },
    searchOrderLine() {
      this.orders.forEach((order) => {
        const id = order.id;
        const found = this.lines.find((element) => element.orderline == id);
        let productLines = [];
        if (typeof found.products !== "undefined") {
          order.products = found.products;
          order.products.forEach((product) =>
            productLines.push(product.netLineAmount)
          );
          let linetotal = productLines.reduce((prev, next) => prev + next, 0);
          order.total = linetotal;
          console.log(order);
        }
      });
    },
  },
  computed: {
    getOrderlines() {
      let newLines = [];
      this.lines.forEach((line) => {
        const newObj = this.OrderlineObject(line);
        // console.log(newObj);
        newLines.push(newObj);
      });
      // console.log(newLines);
      return newLines;
    },
  },
  created() {
    OrderLines.getEvents()
      .then((response) => {
        this.lines = response.data;
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });

    Orders.getEvents()
      .then((response) => {
        this.orders = response.data;
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });
  },
};
</script>

<style lang="scss" scoped></style>
