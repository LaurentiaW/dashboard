<template>
  <div>
    <v-row>
      <v-col lg="4" cols="sm" class="pb-2">
        <Banner
          v-if="this.orders[0].customerNo"
          :customerId="getCustomerId()"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="4" cols="sm" class="pb-2">
        <MonthlySales :monthlySales="searchOrderLine()" />
      </v-col>
      <v-col lg="4" cols="sm" class="pb-2">
        <AvgMonthlySales />
      </v-col>
      <v-col lg="4" cols="sm" class="pb-2">
        <MonthlySalesGraph :sparklineData="randomValues" />
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="4" cols="sm" class="pb-2"> <SeasonOverview /></v-col>
      <v-col lg="8" cols="sm" class="pb-2"> <SeasonProducts /> </v-col>
    </v-row>
    <v-row>
      <v-col lg="8" cols="sm" class="pb-2">
        <OrdersOverview :rows="newData()" />
        <!-- <div v-for="(item, i) in getMonthTotal()" :key="i">{{ item }}</div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MonthlySales from "@/components/cards/MonthlySales.vue";
import AvgMonthlySales from "@/components/cards/AvgMonthlySales.vue";
import MonthlySalesGraph from "@/components/cards/MonthlySalesGraph.vue";
import SeasonOverview from "@/components/cards/SeasonOverview.vue";
import SeasonProducts from "@/components/cards/SeasonProducts.vue";
import OrdersOverview from "@/components/cards/OrdersOverview.vue";
import Banner from "@/components/cards/Banner.vue";

import OrderLines from "@/services/OrderLines.js";
import Orders from "@/services/Orders.js";

export default {
  components: {
    MonthlySales,
    AvgMonthlySales,
    MonthlySalesGraph,
    SeasonOverview,
    SeasonProducts,
    OrdersOverview,
    Banner,
  },
  data() {
    return {
      orders: [],
      lines: [],
      monthlyTotals: [],
      extractOrder: [],
      monthlySales: [],
      months: [],
      randomValues: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    };
  },
  computed: {
    monthlyOrdersCount() {
      let timestampChange = [];
      if (this.orders && this.orders.length) {
        let orderArray = this.orders;
        orderArray.forEach((order) =>
          timestampChange.push(this.timeConverter(order["timestamp"]))
        );
      }
      return timestampChange;
    },
  },
  methods: {
    getCustomerId() {
      if (this.orders[0].customerNo) {
        return this.orders[0].customerNo;
      }
    },
    createNewObject(obj) {
      return (({ id: orderId, salesPerson, season, timestamp: date }) => ({
        orderId,
        salesPerson,
        season,
        date,
      }))(obj);
    },
    createNewOrderLine(obj) {
      return (({ netLineAmount: amount, product, quantity }) => ({
        amount,
        product,
        quantity,
      }))(obj);
    },
    timeConverter(str) {
      const a = str.substr(0, 10);
      const dt = new Date(a);
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let year = dt.getFullYear();
      let numericMonth = dt.getMonth();
      let month = months[numericMonth];
      const time = month + " " + year;
      return time;
    },
    newData() {
      let newData = [];
      this.orders.forEach((order) => {
        const newObj = this.createNewObject(order);
        newObj.date = this.timeConverter(newObj.date);
        newData.push(newObj);
      });
      this.extractOrder = newData;
      return newData;
    },
    searchOrderLine() {
      let newArray = [];

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
          let date = this.timeConverter(order.timestamp);
          order.timestamp = date;
          newArray.push(order);
        }
      });
      this.monthlySales = newArray;
      return this.monthlySales;
    },
    getMonths() {
      let months = [];
      this.orders.forEach((order) => {
        months.push(order.timestamp);
      });
      const uniqueMonths = new Set(months);
      this.months = uniqueMonths;
      return this.months;
    },
    getMonthTotal() {
      const months = this.getMonths();
      months.forEach((element) => {
        this.orders.filter((order) => {
          if (order.timestamp == element) {
            console.log(order.value, element);
          }
        });
      });
      return months;
    },
  },
  filters: {
    currency:
      ("euro",
      function(value) {
        return `€${parseFloat(value).toFixed(2)}`;
      }),
  },
  created() {
    Orders.getEvents()
      .then((response) => {
        this.orders = response.data;
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });

    OrderLines.getEvents()
      .then((response) => {
        this.lines = response.data;
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });
  },
};
</script>

<style lang="scss" scoped></style>
