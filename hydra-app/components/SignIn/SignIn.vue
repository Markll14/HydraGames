<template>
    <button @click="SignIn" class="SignIn"> Sign In</button>
</template>

<script>
import {auth} from '../../firebase/init.js'
export default {
    data() {
        return {

        }
    },
    components: {
        auth
    },

    methods: {
        SignIn() {       
        
        var provider = auth().GoogleAuthProvider();
        auth.auth().signInWithPopup(provider)

        }
    }
}
</script> 

