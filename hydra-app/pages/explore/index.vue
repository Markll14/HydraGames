<template>
    <div class="wrapper">
        <header class="header">
            <ul class="filter">
                <li class="filter--items"></li>
                <li class="filter--items"></li>
                <li class="filter--items"></li>
                <li class="filter--items"></li>
            </ul>
        </header>
        <div class="container">

        </div>
            <ImageCard :cards="cards" />
        </div>
</template>

<script>
import axios from 'axios'
import ImageCard from '../../components/ImageCard/ImageCard'
import {db} from '../../firebase/init.js'
import {storage} from '../../firebase/init.js'
export default {
    name: "explore",
    components: {
        ImageCard,
        db,
        axios,
        storage
    },
    data() {
        return {
            cards: [],
            downloadUrl: ''
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
                console.log(this.cards)
            })
        })
        
    },

//     created() {  
//       const storageRef = storage.ref()
//       const imagesRef = storageRef.child('AshAngelPaid.jpg');
//       axios.get(imagesRef.getDownloadURL()).then( (url) => {
//           console.log(url);
//       }).catch(function(error) {

//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//     case 'storage/object-not-found':
//       // File doesn't exist
//       break;

//     case 'storage/unauthorized':
//       // User doesn't have permission to access the object
//       break;

//     case 'storage/canceled':
//       // User canceled the upload
//       break;

//     case 'storage/unknown':
//       // Unknown error occurred, inspect the server response
//       break;
//   }
// })
            
//     }
}
</script>


<style lang="scss" scoped>

.container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10rem;
    background-color: aqua;


    &--items {
        width: 4rem;
        height: 4rem;
        background-color: lightcoral;
    }
}


</style>


