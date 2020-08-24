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
    {{ salesOrder }}
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>timestamp</th>
          <th>erpOrderRef</th>
          <th>order nr</th>
          <th>collection</th>
          <th>season</th>
          <th>customer nr</th>
          <th>sales rep</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.timestamp }}</td>
          <td>{{ row.erpOrderReference }}</td>
          <td>{{ row.orderNumber }}</td>
          <td>{{ row.collection }}</td>
          <td>{{ row.season }}</td>
          <td>{{ row.customerNo }}</td>
          <td>{{ row.salesPerson }}</td>
        </tr>
      </tbody>
    </table>

    <OrderTable
      v-for="(order, key) in orders"
      :key="key"
      :products="order.products"
    />
  </div>
</template>

<script>
import OrderTable from "@/components/OrderTable.vue";
// import axios from "axios";
import OrderLines from "@/services/OrderLines.js";
import Orders from "@/services/Orders.js";

export default {
  components: {
    OrderTable,
  },
  data() {
    return {
      orders: [],
      rows: [],
    };
  },
  computed: {
    salesOrder() {
      let map = {};
      this.orders.forEach((order) => (map[order.id] = false));
      this.rows.forEach(
        (row) => map[row.orderline] === false && (map[row.orderline] = true)
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
        this.rows = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });

    OrderLines.getEvents()
      .then((response) => {
        this.orders = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });
  },
};
</script>

<style lang="scss" scoped></style>
