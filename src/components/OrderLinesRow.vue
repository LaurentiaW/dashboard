<template>
  <tr v-if="product">
    <td>
      <span v-if="product.product.category">
        {{ product.product.category }}
      </span>
    </td>
    <td>
      <span v-if="product.product.group">
        {{ product.product.group }}
      </span>
    </td>
    <td>
      <span v-if="product.product.description">
        {{ product.product.description }}
      </span>
    </td>
    <td>
      <span v-if="product.product.collection">
        {{ product.product.collection }}
      </span>
    </td>
    <td>
      <span v-if="product.product.colorCode">
        {{ product.product.colorCode }}
      </span>
    </td>
    <td>
      <span v-if="product.product.gender">
        {{ product.product.gender }}
      </span>
    </td>
    <td>
      <span v-if="product.product.season">
        {{ product.product.season }}
      </span>
    </td>
    <td>
      <span v-if="product.product.size">
        {{ product.product.size }}
      </span>
    </td>
    <td>
      <span v-if="product.quantity">
        {{ product.quantity }}
      </span>
    </td>
    <td>
      <span v-if="product.netLineAmount">
        {{ product.netLineAmount }}
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped></style>
