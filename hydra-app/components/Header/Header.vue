<template>
            <header class="header">

            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main"> Gather. Create. Produce.</span> 
                      <h2 class ="heading-primary--sub">A haven for passionate game developers and artists, to collaborate  and develop a game created by you.
                      </h2>
                </h1>
                <nuxt-link to="/explore" >
                    <Button> Go Explore  </Button>
                </nuxt-link>
                </div>
                
        </header>
</template>

<script>
import Button from '../UI/ButtonGreen'
export default {
    components: {
        Button
    }
}
</script>


<style lang="scss" scoped>
.header {
    height: 60vh;
    background-image: url(https://static.vecteezy.com/system/resources/previews/000/145/743/large_2x/cattails-vector-art.jpg);
    background-size: cover;
    background-position: top;
    position: relative;
    border-radius: 1rem;

    &__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    }
}

.heading-primary--main {
    font-size: 6rem;
}

</style>

