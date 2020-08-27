<template>
  <v-card class="height-full">
    <v-data-table
      :headers="headers"
      :items="tableRows"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "id",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Sales Rep", value: "salesPerson", align: "center" },
        { text: "Season", value: "season", align: "center" },
        { text: "Date", value: "date", align: "center" },
      ],
    };
  },
  props: {
    tableRows: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
