<template>
  <div>
    <h1>Dashboard</h1>
    <!-- <router-link :to="{ name: 'order-detail', params: { orderdetail: '1' } }"
      >Order detail #1</router-link
    > -->
    <!-- <table>
      <thead>
        <caption>
          orders overview table
        </caption>
        <tr>
          <th>Month</th>
          <th>Year</th>
          <th>Season</th>
          <th>Nr of Products</th>
          <th>Order Value</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table> -->
    <!-- {{ salesOrder }} -->
    <OrderTable :orders="orders" />

    <!-- {{ lines }} -->

    <OrderLinesTable
      v-for="i in lines"
      :key="i.orderline"
      :products="i.products"
    />
  </div>
</template>

<script>
import OrderLinesTable from "@/components/OrderLinesTable.vue";
import OrderTable from "@/components/OrderTable.vue";
// import axios from "axios";
import OrderLines from "@/services/OrderLines.js";
import Orders from "@/services/Orders.js";

export default {
  components: {
    OrderLinesTable,
    OrderTable,
  },
  data() {
    return {
      orders: [],
      lines: [],
    };
  },
  computed: {
    salesOrder() {
      let map = {};
      this.orders.forEach((order) => (map[order.id] = false));
      this.lines.forEach(
        (line) => map[line.orderline] === false && (map[line.orderline] = true)
      );
      return Object.keys(map).map((k) => ({
        name: k,
        matched: map[k],
      }));
    },

    // submersibleConfig() {
    //   return this.orders.filter(order => order.id === rows')
    // },
  },
  created() {
    Orders.getEvents()
      .then((response) => {
        this.orders = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });

    OrderLines.getEvents()
      .then((response) => {
        this.lines = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });
  },
};
</script>

<style lang="scss" scoped></style>
