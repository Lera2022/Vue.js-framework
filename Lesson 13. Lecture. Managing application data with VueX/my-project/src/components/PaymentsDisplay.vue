<template>
<div>
{{ getFPV }}
</div>
</template>
<script>
…
export default {
…
computed: {
getFPV () {
return this.$store.getters.getFullPaymentValue
}
},
}
</script>
