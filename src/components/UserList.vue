<template>
<div id="theUsers">
    <ul id="userList">
        <li v-for="userID in userarray" :key="userID" >
            <user-item v-bind:id="userID" @delete="onDeletedUser"/>
        </li>
    </ul>
    <button @click="onUserAddClicked">Add user</button>
</div>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
  components: { UserItem },
    name: 'UserList',
    data () {
        return {
            userarray: [1,2,3],
            lastElement: 4
        }
    },
    methods: {
        onUserAddClicked(){
            console.log("UserList Add User");
            this.userarray.push(this.lastElement++);
        },
        onDeletedUser(userid){
            console.log("user "+userid+" deleted!");
            this.userarray.splice(this.userarray.indexOf(userid),1);
        }
    }
}

</script>