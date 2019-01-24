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

            <li v-if="!user" class=navigation__item >
                <nuxt-link to="/auth" class="navigation__link">
                Signup/Login
                    <span></span>  
                </nuxt-link>          
            </li>

            <li v-if="user" class=navigation__item >
                <nuxt-link :to="'/users/' + this.$store.state.username" class=navigation__link>  {{this.$store.state.username}} </nuxt-link> 
                    <span></span>     
                
            </li>

            <li v-if="user" @click="logout" class=navigation__item >
                <nuxt-link  to="/explore" class=navigation__link>Logout</nuxt-link> 
                    <span></span>          
            </li>

        </ul>   
    </div>
</template>

<script>
import Cookie from 'js-cookie'
import {auth} from '@/firebase/init'
import store from '@/store/index'
export default {
    data() {
        return {
            user: null
        }
    },
    components: {
        store,
        auth
    },
    methods: {
        close() {
            document.getElementById("navi-toggle").checked = false;
        },

        logout() {
            console.log("we are trying to log out")
            auth.signOut()
            .then(() => {
                this.$store.commit('setUser', '')
                this.$store.commit('setUsername', '')
                localStorage.removeItem('user-id')
                localStorage.removeItem('username')
                Cookie.remove('username')
                Cookie.remove('uid')
                console.log('User has signed out!')
                this.$router.push({name: '/'})
            })
        }
    },
    created() {
        // let user = auth.currentUser()
        auth.onAuthStateChanged( (user) => {
            if(user) {
                this.user = user
            } else {
                this.user = null
            }
        })

    }
}
</script>


