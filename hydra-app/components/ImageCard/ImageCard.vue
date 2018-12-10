<template>
 <div class="container">
      <nuxt-link v-for="card in cards" :to=" '/explore/' + card.slug " :key="card.id">
                <div class="card">
                    <img class="card__image" src='../../assets/images/AshAngelPaid.jpg' alt="Ash Angel"/>
                    <div class="card__info">
                        <h3 class="card__info--title"> {{ card.title}}}</h3>
                        <h5 class="card__info--author"> {{card.author}}</h5>
                        <p class="card__info--desc">{{ card.description}}</p>
                        <div class="card__info--icons">
                          
                        </div>
                    </div>
                </div>
        </nuxt-link>
 </div>
           
</template>

<script>

export default {
    name: 'ImageCard',
    data() {
        return {
            id: '',
            slug: ''
        }
    },
    props: [
        "cards"
    ],

    created() {
        console.log(this.cards);
    }
        
    
}
</script>


<style lang="scss" scoped>

@import '../../assets/styles/variables.scss';

.card {
    margin: 2rem;
    width: 20rem;
    height: 25rem;
    background-color: rgb(170, 169, 169);
    border-radius: 1rem;
    box-shadow: $prime-box-shadow;

    transition: all .3s;

    &__image {
        width: 100%;
        height: 15rem;
        border-radius: .3rem;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: center;

        &--title {
            font-size: 1.5rem;
        }

        &--author {
            font-size: 1.3rem;
        }

        &--desc {
            font-size: 1rem;
        }

        &--icons {

        }
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: $prime-box-shadow-big
    }
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

