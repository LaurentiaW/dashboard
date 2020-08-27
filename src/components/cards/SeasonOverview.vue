<template>
  <v-card>
    <div class="primary fill-height">&nbsp;</div>
    <div class="col pa-3 py-4 primary--text">
      <h5 class="text-truncate">Season Performance</h5>
    </div>
    <v-data-table
      :headers="headers"
      :items="seasonalSales"
      :items-per-page="5"
      class="elevation-1"
      hide-default-footer
    ></v-data-table>
    <v-data-table
      :headers="headers"
      :items="tableTotals"
      class="elevation-1 hide-header"
      hide-default-footer
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Season",
          align: "start",
          sortable: true,
          value: "season",
        },
        { text: "Order Amount for Season", value: "amount", align: "center" },
        { text: "Nr of products", value: "count", align: "center" },
      ],
      seasonalSales: [{ season: "2019", count: 5, amount: "$94" }],
      tableTotals: [{ season: "Total", count: 11, amount: "$281" }],
    };
  },
};
</script>

<style lang="scss" scoped></style>
