<template>
    <div>
        <div class=navigation>
            <input type="checkbox" class=navigation__checkbox id="navi-toggle"/>

            <label for="navi-toggle" class=navigation__button>
                <span class=navigation__icon>&nbsp; </span>
            </label>
                
            <div class=navigation__background>&nbsp;</div>
            <nav class=navigation__nav> 

            <SignedInLinks/>

            </nav>
        </div>
    </div>
</template>

<script>
import './Navigation.scss'
import SignedInLinks from './SignedInLinks'
export default {
    data() {
        return {

        }
    },
    components: {
        SignedInLinks
    }
}
</script>

<style lang="scss">


</style>


