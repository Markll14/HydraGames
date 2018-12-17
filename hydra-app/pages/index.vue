<template>
  <div class="home">
    <section class="home__intro">
      <div class="home__intro--jumbo">
        <Header/>
      </div>
      
    </section>
    <section class="home__feature">
      <Carousel/>
    </section>
  </div>
</template>
  
<script>
import Carousel from "../components/Carousel/Carousel"
import Header from '../components/Header/Header'
export default {
  name: 'Home',
  data() {
    return {
      cards: []
    }
  },
  components: {
    Header,
    Carousel
  },


}
</script>

<style lang="scss" scoped>

  .home {
    width: 100%;
    height: 100vh;
    background-color: rgb(58, 58, 58);
    
    &__intro {



      &--jumbo {
        width: 100%;
        height: 60vh;
      }

      &--grid{
        background-color: yellow;
      }
    }
  }
</style>

