<template>
    <div>
        <h1>USERS VIEW</h1>

        Sobre el autor....
        
        <div>
            <button @click="gotoHome">HOME</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'UsersView',
    components:{
    },
    methods: {
        gotoHome() {
            this.$router.push('/');
        }

    },
    mounted () {
        this.$store.dispatch('getUsers')
    },

}
</script>