<template>
    <div>
        <ul class=navigation__list @click="close">
            
            <li class=navigation__item >
                <nuxt-link to="/create" class=navigation__link> Create </nuxt-link> 
                    <span></span> 
                    
                
            </li>

            <li class=navigation__item >
                <nuxt-link to="/explore" class=navigation__link> Explore </nuxt-link> 
                    <span></span> 
                
            </li>

            <li  class=navigation__item >
                <nuxt-link to="/admin" class=navigation__link> Your Camp </nuxt-link> 
                    <span></span>     
                
            </li>

            <li class=navigation__item >
                <nuxt-link to="/auth">
                   <SignIn/>
                    <span></span>  
                </nuxt-link>          
            </li>

            <li class=navigation__item >
                <nuxt-link to="/user" class=navigation__link>  {{this.$store.state.username}} </nuxt-link> 
                    <span></span>     
                
            </li>

            <li @click="logout" class=navigation__item >
                <nuxt-link  to="/explore" class=navigation__link>Logout</nuxt-link> 
                    <span></span>     
                
            </li>

        </ul>   
    </div>
</template>

<script>
import {auth} from '@/firebase/init'
import store from '@/store/index'
import SignIn from './SignIn/SignIn'
export default {
    data() {
        return {

        }
    },
    components: {
        SignIn,
        store,
        auth
    },
    methods: {
        close() {
            document.getElementById("navi-toggle").checked = false;
        },

        logout() {
            console.log("we are trying to log out")
            auth.signOut().then(() => {
                this.$store.commit('setUser', '')
                this.$store.commit('setUsername', '')
                console.log('User has signed out!')
            })
        }
    }
}
</script>


