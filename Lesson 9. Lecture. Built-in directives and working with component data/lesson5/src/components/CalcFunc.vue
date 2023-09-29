<template>
<div>
<div class="display">
<input v-model="operand1" />
<input v-model="operand2" />
{{ result }}
</div>
<div v-show="error">Ошибка! {{ error }}</div>

<div class="keyboard">
    <button v-for="operand in operands"
v-bind:key="operand"
v-bind:title="operand"
@click="calculate(operand)">
{{ operand }}
</button>

</div>
<div class="strange-message">
<template v-if="result < 0">Получилось отрицательное
число</template>
<template v-else-if="result < 100">Результат в первой
сотне</template>
<template v-else>Получилось слишком большое число</template>
</div>
<div class="logs">
<div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
</div>

</div>

</template>

<script>
export default {
    name: 'CalcFunc',

    data() {
        return {
            operand1: 0,
            operand2: 0,
            result: 0,
            error: '',
            operands: ['+', '-', '/', '*'],
            logs: {}, // здесь будем хранить наши логи


        };
    },

    methods: {
        add() {
            this.result = this.operand1 + this.operand2
},
        substract() {
            this.result = this.operand1 - this.operand2
},
divide() {
const { operand1, operand2 } = this
if (operand2 === 0) {
this.error = 'Делить на 0 нельзя!'
} else {
this.result = operand1 / operand2
}
},

        multiply() {
            this.result = this.operand1 * this.operand2
},

    },
    fib(n) {
return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
},

    calculate(operation = '+') {
this.error = ''

switch (operation) {
case '+':
this.add()
break;
case '-':
this.substract()
break;
case '*':
this.multiply()
break;
case '/':
this.divide()
break;
}
this.logs[Date.now()] =
`${this.operand1}${operation}${this.operand2}=${this.result}`
},
computed: {
fibb1() {
return this.fib(this.operand1)
},
fibb2() {
return this.fib(this.operand2)
},
},

};
</script>

<style lang="scss" scoped>

</style>