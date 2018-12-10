<template>
  <div class="home">
    <section class="home__intro">
      <div class="home__intro--jumbo">

      </div>
      <div class="home__intro--grid">

      </div>
    </section>
    <section class="home__feature">
      <nuxt-link :to="'/explore/' + 1">
        <article class="home__feature-post">
          <div class="home__feature-post--thumbnail"></div>
          <div class="home__feature-post--content">
            <h1 class="home__feature-post--content--title">Post Title</h1>
            <p class="home__feature-post--content--desc">Description</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>
  
<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>

  .home {
    width: 100%;
    height: 60vh;
    background-color: black;
    
    &__intro {


      background-color: yellowgreen;

      &--jumbo {
        background-color: blue;
      }

      &--grid{
        background-color: yellow;
      }
    }
  }
</style>

