<template>
  <div>
    <v-row>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="primary fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 primary--text">
              <h5 class="text-truncate">
                Monthly Sales Overview: Current Customer Name
              </h5>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="4" cols="sm" class="pb-2">
        <MonthlySales />
      </v-col>
      <v-col lg="4" cols="sm" class="pb-2">
        <AvgMonthlySales />
      </v-col>
      <v-col lg="4" cols="sm" class="pb-2">
        <v-card>
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="success fill-height">&nbsp;</div>
            </div>
            <div class="col pa-3 py-4 success--text">
              <h5 class="text-truncate text-uppercase">Calls</h5>
              <h1>213</h1>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- <v-card height="170" scrollable elevation="4" class="overflow-y-auto">
                    <v-card-text>
                        <p>Codeply Kickstarter PBR 
                        asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan 
                        Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb 
                        readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy 
                        leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, 
                        forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                        <a href="//www.codeply.com" target="_new">Codeply</a>
                        <p>Codeply Kickstarter PBR 
                        asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan 
                        Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb 
                        readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy 
                        leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, 
                        forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    </v-card-text>
                <v-card> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto text-center">
          <v-card-title class="primary--text">
            Sales
          </v-card-title>
          <v-sparkline
            :value="sparklineData"
            padding="18"
            label-size="4"
            color="cyan"
            :gradient="['#007bff', 'cyan']"
            :line-width="2"
            :stroke-linecap="'round'"
          >
          </v-sparkline>
          <v-card-actions class="py-4 justify-center">
            <v-btn color="primary" to="/reports">View Report</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MonthlySales from "@/components/cards/MonthlySales.vue";
import AvgMonthlySales from "@/components/cards/AvgMonthlySales.vue";
// import OrderLinesTable from "@/components/OrderLinesTable.vue";
// import OrderTable from "@/components/OrderTable.vue";
// import axios from "axios";
import OrderLines from "@/services/OrderLines.js";
import Orders from "@/services/Orders.js";

export default {
  components: {
    // OrderLinesTable,
    // OrderTable,
    MonthlySales,
    AvgMonthlySales,
  },
  data() {
    return {
      orders: [],
      lines: [],
      monthlyTotals: [],
      sparklineData: [423, 446, 675, 510, 590, 610, 423],
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
    monthlyTotal(orderline) {
      // let orderline = this.lines[0];
      let products = [];
      let productTotals = [];
      if (orderline) {
        products = orderline.products;
        products.forEach((element) =>
          productTotals.push(element.netLineAmount)
        );
        var orderLineSum = productTotals.reduce(function(a, b) {
          return a + b;
        }, 0);
      }
      return orderLineSum;
    },
    // var shorter = String(str).substr(0, 4);
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
      const year = dt.getFullYear();
      const numericMonth = dt.getMonth();
      const month = months[numericMonth];

      const time = month + " " + year;
      return time;
    },
    monthlyOrdersCount() {
      let timestampChange = [];
      if (this.orders && this.orders.length) {
        let orderArray = this.orders;
        orderArray.forEach((order) =>
          timestampChange.push(this.timeConverter(order["timestamp"]))
        );
      }

      return timestampChange;
      // return this.orders.forEach((order) =>
      //   console.log(this.timeConverter(order["timestamp"]))

      // this.timeConverter(order["timestamp"])
      // (order["timestamp"] = this.timeConverter(order.timestamp))
    },
  },
  methods: {},
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
