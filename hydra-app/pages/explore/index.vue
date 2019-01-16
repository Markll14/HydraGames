<template>
    <div class="wrapper">

        <div class="header">
            <h2 class="header__welcome">Welcome to the explore page where you can view the communitys creations</h2>
        </div>

        <div class="container">
            <ImageCard :cards="cards" />
        </div>
            

        </div>
</template>

<script>
import store from '../../store/index.js'
import axios from 'axios'
import ImageCard from '../../components/ImageCard/ImageCard'
import {db} from '../../firebase/init.js'
import {storage} from '../../firebase/init.js'
export default {
    name: "explore",
    components: {
        ImageCard,
        db,
        axios,
        storage,
        store
    },
    data() {
        return {
            cards: [],
            downloadUrl: ''
        }
    },
    
    created(){
        //fetach data from firestore
        db.collection('Assets').get()
        .then(snapshot => {
            snapshot.forEach( doc => {
                let card = doc.data()
                // the card.id is adding an id property onto the let card variable
                card.id = doc.id
                this.cards.push(card)    
                this.$store.commit('setCards', this.cards)
            })
        })
        
    }


}
</script>


<style lang="scss" scoped>

.container {
    font-family: 'Raleway', sans-serif;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

}

.header {
    display: flex;
    justify-content: center;

    &__welcome {
        font-size: 4rem;
    }
}



</style>


