<template>
    <div class="signup">
        <form @submit.prevent="signup" class="signup-card">
            <div class="signup-card__field">
                <label for="email">Email</label>
                <input class="signup-card__field--input" type="email" name="email" v-model="email">
            </div>
            <div class="signup-card__field">
                <label for="password">password</label>
                <input class="signup-card__field--input" type="password" name="password" v-model="password">
            </div>
            <!-- <div class="signup-card__field">
                <label for="username">username</label>
                <input class="signup-card__field--input" type="text" name="username" v-model="username">
            </div> -->
            <p class="feedback" v-if="feedback">{{feedback}}</p>
            <div class="signup-card__field">
                <Button type="submit" class="btn btn-green">{{isLogin ? "Login" : "SignUp"}}</Button>
                <button type="button" @click="isLogin = !isLogin" class="btn btn-green">Switch to {{isLogin ? "SignUp" : "Login"}} </button>
            </div>
            
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/index.js'
import slugify from 'slugify'
import Button from '@/components/UI/ButtonGreen'
import firebase from 'firebase'
import {db} from '@/firebase/init.js'
export default {
    data() {
        return {
            isLogin: true,
            email: null,
            password: null,
            username: null,
            feedback: null,
            slug: null
        }
    },
    components: {
        Button
    },
    methods: {
        signup() {
            //checking if username exists within our database
                        // here we are sending a HTTP request through axios to firebases API. the first url is for logging a user in,
                        // the second authUrl is for signing a user up. only if isLogin is true
                            this.$store.dispatch('authenticateUser', 
                            {
                            isLogin: this.isLogin,
                            email: this.email,
                            password:  this.password
                            })
                            .then( () => {

                                this.$router.push('/explore')
                            })
                        }
    }
}
                        
                


// // creates a user through email and password
// if(this.email && this.password) {
//                 this.slug = slugify(this.username, {
//                     replacement:'-',
//                     remove: /[$*_+~.()'"\-:@]/g,
//                     lower: true
//                 })
//                 // is creating a variable that stores slug then checks whether it exists, if it does we send feedback
//                 let ref = db.collection('users').doc(this.slug)
//                 ref.get().then( (doc) => {
//                     if(doc.exists) {
//                         this.feedback ="This Username already exists"
//                     } else
                        // firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        // .then((cred) => {
                        //     ref.set({
                        //         username: this.username,
                        //         user_id: cred.user.uid
                        //     })
                        //     this.$store.commit('setUser', cred.user.uid)
                        //     this.$store.commit('setUsername', this.username)
                        //     localStorage.setItem('user_id', cred.user.uid)
                        // })
                        // .then(() => {
                        //     this.$router.push({name: 'explore'})
                        // })
                        // .catch(err => {
                        //     console.log(err)
                        //     // err is caught by catch and has a property called message
                        //     this.feedback = err.message
                        // })
</script>

<style lang="scss" scoped>

    .feedback {
        color: rgb(194, 21, 21);
    }
    .signup {
        margin-top: 10rem;
        &-card {
            display: flex;
            flex-direction: column;
            align-items: center;

            box-shadow: 0 1.5rem 4rem rgba(black, .15);

            transition: all .4s;

            &__field {
                width: 70%;
               &--input {
                        font-size: 1.5rem;
                        font-family: inherit;
                        color: inherit;

                        padding: 1.5rem 2rem; //on forms give input more padding on side
                        border-radius: 2px;
                        background-color: rgba(rgb(245, 239, 239), .5);
                        border: none;
                        border-bottom: 3px solid transparent;
                        width: 90%;
                        display: block;
                        transition: all .3s;

                    } 
            }

                



            &__field:not(:last-child) {
                margin-bottom: 2rem;
                

            }
        }
    }
</style>


