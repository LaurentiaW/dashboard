<template>
  <v-card class="height-full">
    <div class="primary">&nbsp;</div>
    <div class="col pa-3 py-4 primary--text">
      <h5 class="text-truncate">Season Performance</h5>
    </div>
    <v-data-table
      :headers="headers"
      :items="rows"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Order Id",
          align: "start",
          sortable: true,
          value: "orderId",
        },
        { text: "Sales Rep", value: "salesPerson", align: "center" },
        { text: "Season", value: "season", align: "center" },
        { text: "Date", value: "date", align: "center" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
