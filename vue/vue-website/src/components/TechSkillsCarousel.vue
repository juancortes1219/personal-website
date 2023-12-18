<!-- Swiperjs carousel -->
<template>
    <div class="swiper-carousel">
        <swiper-container
            :loop="true"
            :slides-per-view="4"
            :autoplay-delay="3000"
            v-motion-fade-visible-once
        >
            <swiper-slide>
                <font-awesome-icon :icon="['fab', 'vuejs']" size="2xl" style="color: #ffffff;" />
                <p>Vue.js</p>
            </swiper-slide>
            <swiper-slide>
                <img alt="TypeScript logo" class="logo" src="../assets/icons/typescript.svg" />
                <p class="icon-text">TypeScript</p>
            </swiper-slide>
            <swiper-slide>
                <font-awesome-icon :icon="['fab', 'js']" size="2xl" style="color: #ffffff;" />
                <p>JavaScript</p>
            </swiper-slide>
            <swiper-slide>
                <font-awesome-icon :icon="['fab', 'html5']" size="2xl" style="color: #ffffff;" />
                <p>HTML</p>
            </swiper-slide>
            <swiper-slide>
                <font-awesome-icon :icon="['fab', 'css3-alt']" size="2xl" style="color: #ffffff;" />
                <p>CSS</p>
            </swiper-slide>
            <swiper-slide>
                <font-awesome-icon :icon="['fab', 'bootstrap']" size="2xl" style="color: #ffffff;" />
                <p>Bootstrap</p>
            </swiper-slide>
            <swiper-slide>
                <font-awesome-icon :icon="['fab', 'mdb']" size="2xl" style="color: #ffffff;" />
                <p>MDBootstrap</p>
            </swiper-slide>
            <swiper-slide>
                <img alt="PNPM logo" class="logo" src="../assets/icons/pnpm.svg" />
                <p class="icon-text">PNPM</p>
            </swiper-slide>
            <swiper-slide>
                <font-awesome-icon :icon="['fab', 'github']" size="2xl" style="color: #ffffff;" />
                <p>Github</p>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<style scoped>
swiper-container {
    padding-left: 2rem;
    padding-right: 2rem;
    /* background-color: gray; */
}

swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 10rem;
}

swiper-slide img {
    height: 1.75rem;
    margin-top: 0.1rem;
}

/* .fa-2xl {
    font-size: 2rem !important;
} */

swiper-slide p {
    margin-bottom: 0;
    font-size: 0.8rem;
}

.icon-text {
    margin-top: 0.1rem;
}

@media (min-width: 992px) {
    swiper-container {
        padding-left: 4rem;
        padding-right: 4rem;
    }

    swiper-slide {
        height: 15rem;
    }

    swiper-slide img {
        height: 5.25rem;
        margin-top: 0.3rem;
    }

    .fa-2xl {
        font-size: 6rem !important;
    }

    swiper-slide p {
        font-size: 1.2rem;
    }

    .icon-text {
        margin-top: 0.3rem;
    }
}
</style>