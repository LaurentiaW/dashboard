<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>timestamp</th>
        <th>erpOrderRef</th>
        <th>order nr</th>
        <th>collection</th>
        <th>season</th>
        <th>customer nr</th>
        <th>sales rep</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.timestamp }}</td>
        <td>{{ order.erpOrderReference }}</td>
        <td>{{ order.orderNumber }}</td>
        <td>{{ order.collection }}</td>
        <td>{{ order.season }}</td>
        <td>{{ order.customerNo }}</td>
        <td>{{ order.salesPerson }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    orders: Array,
  },
};
</script>

<style lang="scss" scoped></style>
