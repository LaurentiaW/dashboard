<template>
  <div>
    <h1>Order line: #{{ orderdetail }}</h1>
    
    <p>this is the orderdetail page showing orderline {{orderdetail}}</p>
  </div>
</template>

<script>
export default {
  props: ["orderdetail"]
};
</script>

<style lang="scss" scoped>
</style>