<template>
  <tr>
    <td>{{ product.shipmentDate}}</td>
    <td>{{ product.product.category}}</td>
    <td>{{ product.product.collection}}</td>
    <td>{{ product.product.group}}</td>
    <td>{{ product.product.description}}</td>
     <td>{{ product.product.colorCode}}</td>
    <td>{{ product.product.gender}}</td>
    <td>{{ product.product.season}}</td>
    <td>{{ product.product.size}}</td>
    <td>{{ product.product.sizeSortCode}}</td>
    <td>{{ product.type}}</td>
    <td>{{ product.quantity}}</td>
    <td>{{ product.currency}}</td>
    <td>{{ product.netLineAmount}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    product: Object
  }
};
</script>

<style lang="scss" scoped>
</style>