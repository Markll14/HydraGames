<template>
    <div class="fullCard">
        <h2 class="fullCard__title"> {{ this.cards[0].title }} </h2>
        <img class="fullCard__img" :src="this.cards[0].imageurl" alt="">
        <p class="fullCard__desc">{{this.cards[0].description}}</p>

    <nuxt-link class="fullCard__link" :to="'/explore'">
        <Button>Explore More</Button>
    </nuxt-link>

    </div>


    
</template>

<script>
import Button from '@/components/UI/ButtonGreen'
export default {
    data() {
        return {

        }
    },
    components: {
        Button
    },
    computed:{
        cards() {
            return this.$store.state.loadedCards.filter((card) => {
                return card.slug == this.$route.params.slug
            })
        }
    },

    created() {

    },
    mounted() {

    },
    updated() {
    },

    methods: {

    }

}
</script>

<style lang="scss" scoped>

    .fullCard{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;

        // background-color: rgb(46, 45, 45);
        &__img {
            height: 80vh;
            width: 80%;
        }

        &__title {
            font-size: 6rem;
        }

        &__desc {
            font-size: 3rem;
        }

        &__link {
            margin: -1rem;
        }
    }

    .btn-margin {
        margin: 10rem;
    }
</style>








