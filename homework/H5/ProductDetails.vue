<template>
<p>название продукта - {{ name }}</p>
<p>форматированную цену - {{ formattedPrice() }}</p>
<p>статус доступности - 
<template v-if="available">Available</template>
<template v-else>Out of stock</template>
</p>
</template>

<script>

export default {
  name: 'SuppliesList',
  components: {
    SupplyComponent,
  },
  data() {
    return {
      product: 
        {
          name: 'first',
          price: 99.99,
          available: true,
        }
    };
  },
  methods: {

  },
  computed: {
    formattedPrice() {
      return `$${this.price}`
    },
  },
};
</script>

<style scoped>

</style>
