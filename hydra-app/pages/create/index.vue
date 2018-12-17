<template>
    <div class="create">
        <div class="book">
                        <div @submit.prevent="routeExplore" class="book__form">
                            <h1 class="book__heading">
                                Upload and share all you're wildest creations with us.
                            </h1>
                            <form class="form">
                                    <div class="u-margin-bottom-medium">
                                            <h2 class="heading-secondary u-margin-bottom-small">
                                                Create here
                                            </h2>
                                        </div>

                                <div class="form__group">
                                    <input type="file" class="form__input" placeholder="Image" name="title" required @change="onFileSelected">
                                    <label for="image" class="form__label">title</label>

                                <div class="form__group">
                                    <AppButton class="btn btn--green" @click="onUpload" > Upload Image &rarr;</AppButton>
                                </div>
                                </div>

                                <div class="form__group">
                                    <input type="text" class="form__input" placeholder="Title" name="title" required  v-model="title">
                                    <label for="title" class="form__label">title</label>
                                </div>

                                <div class="form__group">
                                    <input type="text" class="form__input" placeholder="Description" name="description" required v-model="description">
                                    <label for="description" class="form__label"></label>
                                </div>
                                <!-- this loop is adding an author visually to our authors property by using the index set in the loop  -->
                                <div class="authors" v-for="(author, index) in authors" :key="index">
                                    <label for="author" class="form__label">Author: </label>
                                    <input type="text" name="author" v-model="authors[index]">
                                    <i class="fas fa-trash delete" @click="deleteAuthor(author)"></i>
                                </div>
                                <div class="form__group">
                                    <input type="text" class="form__input" placeholder="author" name="add-author"   @keydown.tab.prevent="addAuthor" v-model="another" required>
                                    <label for="add-author" class="form__label"></label>
                                </div>
                             

                                <div class="form__group">
                                    <AppButton class="btn btn--green" @click="AddCreation" > Add Creation &rarr;</AppButton>
                                </div>

                            </form>
                        </div>
                    </div>
                    
                        <!-- <ImageCard :url="url"/> -->
                    
                
    </div>  
</template>


<script>
import ImageCard from '../../components/ImageCard/ImageCard'
import axios from 'axios'
import {db} from '../../firebase/init.js';
import {storage} from '../../firebase/init.js'
import slugify from 'slugify';
import AppButton from '@/components/UI/AppButton';
import AppControlInput from '@/components/UI/AppControlInput';
export default {
    name: 'Create',
    data() {
        return {
            title: '',
            isUploaded: false,
            description: '',
            another: '',
            authors: [],
            slug: '',
            selectedFile: '',
            imageurl: []
        }
    },
    components: {
        axios,
        db,
        storage,
        slugify,
        AppButton,
        AppControlInput,
        ImageCard
    },
    methods: {

        // we are setting our selectedFile property to be equal to the information of the file that is accessible by our event that has access to it when the input was changed and the onFileSelected was initiated 
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        onUpload() {
            const formData = new FormData();
            formData.append('image', this.selectedFile, this.selectedFile.name)
            axios.post('https://us-central1-hydra-games.cloudfunctions.net/uploadFile', formData,{
            onUploadProgress: uploadEvent => {
                console.log('upload progress: ' + Math.round(uploadEvent.loaded/ uploadEvent.total *100) + '%')
                }
            })
            .then(res => {
                console.log('below is the file name')
                console.log(this.selectedFile)
                return storage.ref(this.selectedFile.name).put(this.selectedFile).then( (fileSnapshot) => {
                    return fileSnapshot.ref.getDownloadURL()
                    console.log(fileSnapshot)
                })
                .then(url => {
                    console.log(url);
                    this.imageurl.push(url);
                    console.log(this.imageurl)
                    this.isUploaded= true;
                    console.log(this.isUploaded);
                })
            })
        },


        AddCreation() {
            if(this.title) {
                //  create a slug, replacement will replace any spaces with "-", remove will remove any of the characters in the array passed in. lower makes sure all characters are lowercase
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+`.()'"\-:@]/g,
                    lower: true
                })
                db.collection('Assets').add({
                    imageurl: this.imageurl,
                    title: this.title,
                    description: this.description,
                    authors: this.authors,
                    slug: this.slug
                }).then(() => {
                    console.log("This is where we should get routed back to explore")
                    this.$router.push({name: 'explore'})
                }).catch( err => {
                    console.log(err);
                })
            } 
        },

        addAuthor() {
            if(this.another){
                this.authors.push(this.another)
                this.another =''
            }
        },
        deleteAuthor(auth){
            this.authors = this.authors.filter(author => {
                return author != auth
            })
        },

        routeExplore() {
            this.$router.push({name: 'explore'});
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.book__heading {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(
        to right,
        $color-primary-light,
        $color-primary-dark
    );

    background-clip: text;
    color: transparent;
}
.book__form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form {
    width: 80rem;
    margin: 5rem;

    &__group:not(:last-child) {
        margin-bottom: 2rem;
    }

    &__input {
        font-size: 1.5rem;
        font-family: inherit;
        color: inherit;
        padding: 1.5rem 2rem; //on forms give input more padding on side
        border-radius: 2px;
        background-color: rgba($color-white, .5);
        border: 1px solid black;
        // border-bottom: 3px solid transparent;
        width: 90%;
        display: block;
        transition: all .3s;



        &::-webkit-input-placeholder {
                color: $color-grey-dark-2;
        }

        &:focus {
        outline: none;
        box-shadow: $prime-box-shadow;
        border-bottom: 3px solid $color-primary;
        }

        &:focus:invalid {
            border-bottom: 3px solid $color-secondary-dark;
        }

    }

    &__label {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: .7rem;
        display: block;
        transition: all .3s;
    }

    &__input:placeholder-shown + &__label{
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }

    &__radio-group {
        width: 49%;
        display: inline-block;

        // @include respond(tab-port) {
        //     width: 100%;
        //     margin-bottom: 2rem;
        // }
    }

    &__radio-input {
        display: none;
    }

    &__radio-label {
        font-size: $default-font-size;
        cursor: pointer;
        position: relative;
        padding-left: 4.5rem;
    }

    &__radio-button {
        height: 3rem;
        width: 3rem;
        border: 5px solid $color-primary;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 0;
        top: -.4rem;

        &::after{
            content: "";
            display: block;
            border-radius: 50%;
            height: 1.3rem;
            width: 1.3rem;
            background-color: $color-primary;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity .2s;

        }
    }
    &__radio-input:checked ~ &__radio-label &__radio-button::after {
        opacity: 1;
    }
}

.authors{
    position: relative;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem; //on forms give input more padding on side
    border-radius: 2px;
    background-color: rgba($color-white, .5);
    border: 1px solid black;
    // border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all .3s;
}

.create .delete {
    position: absolute;
    right: 0;
    bottom: 1.6rem;
    color: #aaa;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        color: rgb(253, 120, 120)
    }
}
</style>
