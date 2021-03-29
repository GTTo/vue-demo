<template>
    <div id="userItem">
        <label for="name">Name: </label>
        <input type="text" name="name" v-model="name"/>

        <label for="surname">Surname: </label>
        <input type="text" name="surname" v-model="surname"/>
            
        <button @click="onDeleteClicked">Delete</button>
    </div>
</template>

<script>

export default {
    name: 'UserItem',
    props: {
        id: Number
    },
    data () {
        return {
            name: '',
            surname: ''
        }
    },
    methods: {
        onDeleteClicked(){
            console.log("UserItem "+this.id+" Delete!");
            this.$emit("delete",this.id);
        }
    }
}

</script>
