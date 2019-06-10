<template>
  <div>
    <img
      :src="data.images.primary.large"
      alt="data image">
    <h2>{{ data.general.name }}</h2>
    <p>{{ data.general.presentable_id }}</p>
    <input
      v-model="quantity"
      type="text">
    <button>Add</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
};
</script>

<style>

</style>
