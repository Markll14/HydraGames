<template>
    <div class="profile">
        <h2 class="welcome">welcome {{this.$store.state.username}}</h2>
        <div v-for="asset in userAssets" class="userCard" :key="asset.title">
            <img :src="asset.imageurl" alt="" class="userCard__img">

        </div>
    </div>
    
</template>

<script>
import {db} from '@/firebase/init'
import store from '@/store/index'
export default {
    middleware: 'check-auth',
    data() {
        return {
            userAssets: []
        }
    },

    components: {
        store,
        db
    },
    created() {
        var assetsRef = db.collection('Assets')
        var query = assetsRef.where('user', '==', this.$store.state.user)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach( (doc) => {
                console.log(doc.data())
                this.userAssets.push(doc.data())
            })
                
        })
    }
}
</script>

<style lang="scss" scoped>

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .welcome {
        font-size: 10rem;
    }

    .userCard {

        &__img {
            height: 10rem;
            width: 10rem;
        }
    }
</style>


