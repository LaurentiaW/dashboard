<template>
  <v-card class="height-full">
    <v-row class="no-gutters">
      <div class="col pa-3 py-4">
        <h5 class="text-truncate">Space for Graph</h5>
        <v-sparkline
          :value="sparklineData"
          padding="18"
          label-size="4"
          color="cyan"
          :gradient="['#887177', '#CF9EAC']"
          :line-width="2"
          :stroke-linecap="'round'"
        >
        </v-sparkline>
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    sparklineData: {
      type: Array,
    },
  },
};
</script>

<style lang="scss"></style>
