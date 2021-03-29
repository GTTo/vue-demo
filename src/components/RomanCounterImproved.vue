<template>
  <div>
    <slot name="title"></slot>
    ​
    <input type="number" v-model="counter" />
    
    <transition name="fade">
      <p v-if="showMessage">Romanized: {{ romanized }}</p>
    </transition>
  </div>
</template>
​
<script>
export default {
  name: "RomanCounterImproved",
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(newValue) {
      console.log("Value changed: ", newValue);
    },
  },
  computed: {
    showMessage() {
      return this.counter > 0;
    },
    romanized() {
      let num = this.counter;
      let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      let romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
      ];
      let romanized = "";

    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
          romanized += romanNumeral[index];
          num -= decimalValue[index];
        }
      }
      
      return romanized || "nothing";
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>