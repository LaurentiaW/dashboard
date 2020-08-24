<template>
  <table>
    <thead>
      <tr>
        <th>shipment date</th>
        <th>category</th>
        <th>collection</th>
        <th>group</th>
        <th>description</th>
        <th>colorCode</th>
        <th>gender</th>
        <th>season</th>
        <th>size</th>
        <th>size alt</th>
        <th>type</th>
        <th>quantity</th>
        <th>currency</th>
        <th>total</th>
      </tr>
    </thead>
    <tbody>
      <OrderRow v-for="(product, i) in products" :key="i" :product="product" />
    </tbody>
    <tfoot></tfoot>
  </table>
</template>

<script>
import OrderRow from "@/components/OrderRow.vue";
export default {
  components: {
    OrderRow,
  },
  props: {
    products: Array,
  },
};
</script>

<style lang="scss" scoped></style>
