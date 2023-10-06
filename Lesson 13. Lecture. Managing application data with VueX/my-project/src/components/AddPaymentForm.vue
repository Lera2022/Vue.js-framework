<template>
<div>
<input placeholder="Amount" v-model="amount" />
<input placeholder="Type" v-model="type" />
<input placeholder="Date" v-model="date" />
<button @click="onSaveClick">Save!</button>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
data () {…},
computed: {
...mapMutations([
'setPaymentsListData',
]),
14
getCurrentDate () {…}
},
methods: {
onSaveClick () {
const data = {
amount: +this.amount,
type: this.type,
date: this.date || this.getCurrentDate,
}
this.$emit('addNewPayment', data)
}
}
}
</script>