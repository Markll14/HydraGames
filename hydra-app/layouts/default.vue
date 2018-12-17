<template>
  <div class="wrapper-main">
    <main class="main-flex">
        <nuxt-link to="/">
          <div class="header__logo-box">
              <img class="header__logo" src="@/assets/images/createdTrans.png" alt="Logo">
          </div>
        </nuxt-link>
        <Navigation/>
        <nuxt/>
    </main>

     <Footer class="footer"/>
  </div>

</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '../components/Footer/Footer'
export default {
  components: {
    Navigation,
    Footer
  }
  
}
</script>


<style>
body {
  height: 100vh;
  position: relative;


}

html {
  font-family: 'Raleway',  sans-serif;
    font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100vh;
}

.wrapper-main {
    display: flex;
    min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

.main-flex {
  flex: 1;
}


footer {
position: relative;
width: 100%;

}

.header__logo-box {
        position: absolute;
        top: 1rem;
        left: 1rem;

        z-index: 10;
    }

    .header__logo {
        height: 8rem;
    }

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
