<template>
<div id="app">
<PaymentsDisplay :items="paymentsList" />
<AddPaymentForm @addNewPayment="addNewPayment" />
<div>
<header>
<div>My personal costs</div>
</header>
<main>
<PaymentsDisplay />
<AddPaymentForm/>
</main>
</div>
</div>
</template>
<script>
import PaymentsDisplay from './components/PaymentsDisplay'
import AddPaymentForm from './components/AddPaymentForm';

export default {
name: 'App',
components: {
PaymentsDisplay,
},
data() {
return {
paymentsList: [],
}
},
methods: {
fetchData() {
return [
{
date: '28.03.2020',
category: 'Food',
value: 169,
},
{
date: '24.03.2020',
category: 'Transport',
value: 360,
},
{
date: '24.03.2020',
category: 'Food',
value: 532,
},
]
},
},
created() {
this.paymentsList = this.fetchData()
},
addNewPayment (data) {
this.paymentsList = [...this.paymentsList, data]
}
}


</script>
<style>
</style>
