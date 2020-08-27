<template>
  <v-card>
    <v-row class="no-gutters">
      <div class="col-auto">
        <div class="primary fill-height">&nbsp;</div>
      </div>
      <div class="col pa-3 py-4 primary--text">
        <h5 class="text-truncate">
          Monthly Sales Overview: Customer No {{ customerId }}
        </h5>
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    customerId: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
