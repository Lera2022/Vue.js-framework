<template>
<button>Hover!</button>
</template>
<script>
export default {
methods: {
onMouseOver() {
console.log('Hovered on button!')
}
},
mounted() {
const btn = this.$el.querySelector('button')
if (btn) {
btn.addEventListener('mouseover', this.onMouseOver)
}
},
beforeDestroy() {
const btn = this.$el.querySelector('button')
if (btn) {
btn.removeEventListener('onmouseover', this.onHover)
}

},
}
</script>
