<template>
    <div>
        <h1>CONTACT VIEW</h1>
        <label for="name">Name: </label>
        <input type="text" name="name" v-model="name"/>

        <label for="email">e-mail: </label>
        <input type="text" name="email" v-model="email"/>
        
        <label for="message">Message: </label>
        <textarea name="message" v-model="message"/>

        <div>
            <button @click="gotoHome">HOME</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContactView',
    components:{
    },
    data() {
        return {
            name: 'jhon',
            email: 'jhon@doe.com',
            message: 'this is a message'
        }
    },
    methods: {
        gotoHome() {
            this.$router.push('/');
        }
    }
}
</script>