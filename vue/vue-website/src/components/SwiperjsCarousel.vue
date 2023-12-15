<template>
    <div class="swiper-carousel" v-motion-fade-visible-once>
        <swiper-container
            :loop="true"
            :slides-per-view="3"
            :autoplay-delay="5000"
        >
            <swiper-slide>
                <font-awesome-icon :icon="['fab', 'vuejs']" size="2xl" style="color: #ffffff;" />
                <p>Vue.js</p>
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
                <p>PNPM</p>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<style scoped>
swiper-container {
    padding-left: 4rem;
    padding-right: 4rem;
    background-color: red;
}

swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 15rem;
}

.fa-2xl {
    font-size: 6rem !important;
}

swiper-slide p {
    margin-bottom: 0;
}
</style>