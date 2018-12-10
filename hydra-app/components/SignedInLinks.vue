<template>
    <div>
        <ul class=navigation__list @click="$emit('close')">
            
            <li class=navigation__item >
                <nuxt-link to="/create" class=navigation__link> Create </nuxt-link> 
                    <span></span> 
                    
                
            </li>

            <li class=navigation__item >
                <nuxt-link to="/explore" class=navigation__link> Explore </nuxt-link> 
                    <span></span> 
                
            </li>

            <li  class=navigation__item >
                <nuxt-link to="/admin" class=navigation__link> Your Camp </nuxt-link> 
                    <span></span>     
                
            </li>

            <li class=navigation__item >
                <nuxt-link to="/about" class=navigation__link> Log Out </nuxt-link> 
                    <span></span>       
                
            </li>

            <li class=navigation__item >
                <nuxt-link to="/explore" class=navigation__link>  Avatar </nuxt-link> 
                    <span></span>     
                
            </li>

        </ul>   
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>


