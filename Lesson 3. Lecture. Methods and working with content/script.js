// v-on:click
// v-on:input
// v-on:focus
// v-on:mouseover
// v-on:keyup

new Vue({
    el: '#app',
    data: {
        id: '1',
        title: 'button'
    }
})

new Vue({
    el: '#app',
    data: { operand1: 0, operand2: 0, result: 0, },
    methods: { add() { console.log('Add operation!') } },
})

// methods: {
//         add() {
//             8
//             this.result = this.operand1 + this.operand2
//         },
//         substract() {
//             this.result = this.operand1 - this.operand2
//         },
//         divide() {
//             this.result = this.operand1 / this.operand2
//         },
//         multiply() {
//             this.result = this.operand1 * this.operand2
//         },
//     },


// :class=”className”