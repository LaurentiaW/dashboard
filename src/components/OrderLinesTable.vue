<template>
  <table>
    <thead>
      <tr>
        <th>category</th>
        <th>sub category</th>
        <th>description</th>
        <th>collection</th>
        <th>colorCode</th>
        <th>gender</th>
        <th>season</th>
        <th>size</th>
        <th>quantity</th>
        <th>total</th>
      </tr>
    </thead>
    <tbody v-if="products">
      <OrderLinesRow
        v-for="(product, i) in products"
        :key="i"
        :product="product"
      />
    </tbody>
    <tfoot></tfoot>
  </table>
</template>

<script>
import OrderLinesRow from "@/components/OrderLinesRow.vue";
export default {
  components: {
    OrderLinesRow,
  },
  props: {
    products: Array,
  },
};
</script>

<style lang="scss" scoped></style>
