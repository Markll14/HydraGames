<template>
  <div class="carousel">
    <component
      :is="slickComp"
      ref="slick" 
      :options="slickOptions"
    >
      <nuxt-link v-for="card in cards" :to="'/explore'" :key="card.id">
        <img class="carousel__img" :src="card.imageurl" alt="">
      </nuxt-link>
        

    </component>
  </div>
</template> 

<script> 
import {db} from '@/firebase/init.js'
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
  export default {
    data: () => ({
        cardsArray:[],
        'slickComp': '',
        slickOptions: {
            slidesToShow: 3,
            infinite: true,
            slidesToScrol: 1,
            dots: true,
            centerMode: true
        }
    }),
    components: {
        Slick: () => import('vue-slick'),
        db
    },
    mounted: function () {
        this.$nextTick(function () {
           this.slickComp = 'Slick'
        })
    },
    computed: {
      cards() {
        return this.$store.state.loadedCards.filter((url) => {
          return url.imageurl
        })
      }
    },
      created(){
        //fetach data from firestore
        db.collection('Assets').get()
        .then(snapshot => {
            snapshot.forEach( doc => {
                let card = doc.data()
                console.log(card)
                // the card.id is adding an id property onto the let card variable
                card.id = doc.id
                this.cards.push(card)    
                this.$store.commit('setCards', this.cardsArray)
                console.log(this.cardsArray)
            })
        })
        
    },
        methods: {
        next() {
            this.$refs.slick.next();
        },
 
        prev() {
            this.$refs.slick.prev();
        }
    }
  }
</script>

<style lang="scss" scoped>

    .carousel {
        overflow: hidden;

        &__img {
          height: 20rem;
          width: 40rem;
        }
    }

</style>


