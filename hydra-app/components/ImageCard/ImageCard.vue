<template>
 <div class="container">
      <nuxt-link class="container-link" v-for="(card,index) in cards"  :key="index" :to="'/explore/' + card.slug">
                <div class="card">
                    <img class="card__image" :src="card.imageurl[0]" alt="Ash Angel"/>
                    <div class="card__info">
                        <h3 class="card__info--title"> {{ card.title}} </h3>
                        <h5 class="card__info--author">Authors: {{card.authors[0]}}</h5>
                        <p class="card__info--desc"> {{ card.description}} </p>
                        <div class="card__info--icons">
                            
                            <i class="material-icons">speaker_notes</i>
                            <i class="material-icons">favorite</i>
                        </div>
                    </div>
                </div>
        </nuxt-link>
        <i @click="download" class="material-icons">cloud_download</i>
 </div>
           
</template>

<script>
import {storage} from '@/firebase/init'
import store from '@/store/index'
export default {
    name: 'ImageCard',
    data() {
        return {
            id: '',
            slug: '',
            cards: []
        }
    },
    methods: {
        download() {
          
          const fileRef = storage.ref('AshAngelPaid.jpg')
          
          var blob = null;
          console.log(fileRef)
          fileRef.getDownloadURL().then( (url) => {
              console.log("this is returned from firebase ")
              console.log(url)
              var xhr = new XMLHttpRequest()
              xhr.responseType = 'blob';
              xhr.onload = (event) => {
                  blob = xhr.response
              }
              xhr.open('GET', url)
              xhr.send()
          }).then(() => {

          }).catch( (err) => {
              console.log(err)
          })
        }
    },

    created() {
        this.$store.state.loadedCards.forEach( (doc) => {

          this.cards.push(doc)
        })
    }

    
}
</script>


<style lang="scss" scoped>

@import '../../assets/styles/variables.scss';

.container {

    &-link {
      text-decoration: none;  
      color: black;
      font-family: 'Raleway', sans-serif;
    }
}

.card {
    margin: 2rem;
    width: 30rem;
    height: 40rem;
    background-color: rgb(170, 169, 169);
    border-radius: 1rem;
    box-shadow: $prime-box-shadow;


    transition: all .3s;

    &__image {
        width: 100%;
        height: 60%;
        border-radius: .3rem;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        &--title {
            font-size: 1.8rem;
        }

        &--author {
            font-size: 1.5rem;
        }

        &--desc {
            font-size: 1.3rem;
        }

        &--icons {

        }
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: $prime-box-shadow-big
    }
}

i {
    transition: all .2s;
    cursor: pointer;
}
i:hover {
    transform: scale(1.2);
}

.icon {
    font-size:  2rem;
    cursor: pointer;
}

.edit {
    &:hover {
        color: rgb(125, 250, 250);
    }
}
</style>

