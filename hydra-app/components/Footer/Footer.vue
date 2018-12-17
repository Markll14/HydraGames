<template>
        <footer class="footer">
            <div class="footer__logo-box">
                <img src="@/assets/images/createdTrans.png" alt="Full Logo" class="footer__logo">
            </div>
            <div class="row">
                <div>
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><a href="" class="footer__link">Company</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Contact Us</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Careers</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Privacy Policy</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div >
                    <p class="footer__copyright">
                        Built <a href="#" class="footer__link">Mark Lermer-Lanier</a> Copyright &copy; by Mark lermer-lanier. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Mark Lermer-Lanier, is of course highly appreciated.
                    </p>
                </div>
            </div>
        </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.footer {
    margin: 0 auto;
    background-color: $color-grey-dark-3;
    padding: 2rem 0 ;
    font-size: 1.4rem;
    color: $grey-color-light-1;
    position: relative;

    &__logo-box {
        display: block;
        text-align: center;
        margin-bottom: 8rem;
    }

    &__logo {
        width: 25rem;
        height:auto ;
        @include position-center;
        top: 25%;
    }

    &__navigation {
        border-top: 1px solid $color-grey-dark;
        display: inline-block;
        padding-top: 2rem;
    }

    &__list {
        list-style: none;
    }

    &__item {
        display: inline-block;
        
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    }

    &__link {

        &:link,
        &:visited {
            color: $color-grey-dark;
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
            transition: all .2s;
        }

        &:hover,
        &:active {
            color: $color-primary;
            background-color: $color-grey-dark-3;
            box-shadow: $prime-box-shadow-big;
            transform: rotate(5deg) scale(1.3);
        }
    }

    &__copyright {
        border-top: 1px solid $color-grey-dark;
        padding-top: 2rem;
        width: 80%;
        float: right;
    }
}
</style>

