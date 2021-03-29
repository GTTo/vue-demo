<template>
    <div>
        <h1>AUTHOR VIEW</h1>

        Sobre el autor....
        
        <div>
            <button @click="gotoHome">HOME</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AuthorView',
    components:{
    },
    methods: {
        gotoHome() {
            this.$router.push('/');
        }

    }
}
</script>