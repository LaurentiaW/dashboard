<template>
  <v-card>
    <div class="primary fill-height">&nbsp;</div>
    <div class="col pa-3 py-4 primary--text">
      <h5 class="text-truncate">Customer's Monthly Orders</h5>
    </div>
    <v-data-table
      :headers="headers"
      :items="monthlySales"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <!-- <v-data-table
      :headers="headers"
      :items="tableTotals"
      class="elevation-1 hide-header"
    ></v-data-table> -->
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Month",
          align: "start",
          sortable: true,
          value: "timestamp",
        },
        { text: "Value of Orders", value: "total", align: "center" },
        // { text: "Nr of orders", value: "count", align: "center" },
      ],
      // monthlySales: [
      //   { month: "Jan", count: 5, amount: "$94" },
      //   { month: "Feb", count: 4, amount: "$102" },
      //   { month: "Mar", count: 2, amount: "$85" },
      // ],
      // tableTotals: [{ month: "Total", count: 11, amount: "$281" }],
    };
  },
  props: {
    monthlySales: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
v-data-table > .v-data-table__wrapper > table {
  th,
  td {
    border-bottom: none !important;
  }
}

.hide-header {
  table {
    margin-top: -18px;
    thead {
      height: 1px !important;

      tr {
        height: 1px !important;
        th {
          height: 1px !important;
          cursor: initial !important;
          span {
            opacity: 0;
            height: 1px;
          }
          i.v-data-table-header__icon {
            display: none !important;
          }
        }
      }
    }
    tbody {
      font-weight: bolder;
    }
  }
}
</style>
