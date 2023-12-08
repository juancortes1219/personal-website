<template>
    <swiper-container
        :loop="true"
        :slides-per-view="3"
        :autoplay-delay="5000"
    >
        <swiper-slide>
            <img src="https://picsum.photos/190" alt="Sample 1">
        </swiper-slide>
        <swiper-slide>
            <img src="https://picsum.photos/191" alt="Sample 2">
        </swiper-slide>
        <swiper-slide>
            <img src="https://picsum.photos/192" alt="Sample 3">
        </swiper-slide>
        <swiper-slide>
            <img src="https://picsum.photos/193" alt="Sample 4">
        </swiper-slide>
        <swiper-slide>
            <img src="https://picsum.photos/194" alt="Sample 5">
        </swiper-slide>
        <swiper-slide>
            <img src="https://picsum.photos/195" alt="Sample 6">
        </swiper-slide>
    </swiper-container>
</template>

<style scoped>
swiper-container {
    padding-left: 4rem;
    padding-right: 4rem;
}

swiper-slide {
    text-align: center;
    /* font-size: 18px; */
    /* background-color: gray; */
    display: flex;
    justify-content: center;
    align-items: center;
    
}

swiper-slide img {
    display: block;
    width: 50%;
    height: 50%;
    object-fit: cover;
}
</style>