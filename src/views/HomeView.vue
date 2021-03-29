<template>
    <div>
        <h1>HOME VIEW</h1>

        <button @click="gotoAuthor">Author page</button>
        <button @click="gotoContact">Contact</button>

        <p> GLOBAL COUNTER {{counter}}</p> <button @click="incrementCounter">increment counter</button>
        <p> GLOBAL ROMAN COUNTER {{romanCounter}}</p>
    </div>
</template>

<script>

export default {
    name: 'HomeView',
    components:{
    },
    methods: {
        gotoAuthor() {
            this.$router.push('/author');
        },
        gotoContact() {
            this.$router.push('/contact');
        },
        incrementCounter() {
            //this.$store.commit('increment');
            this.$store.dispatch('incrementAsync');
        }
    },
    computed: {
        counter () {
            return this.$store.state.counter;
        },
        romanCounter () {
            return this.$store.getters.romanCounter;
        }
    }
}
</script>