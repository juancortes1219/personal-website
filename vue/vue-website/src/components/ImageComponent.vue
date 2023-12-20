<template>
    <div
        class="image-component bg-image bg-fixed"
        style="background-image: url('https://lh3.googleusercontent.com/pw/ABLVV878SswofaGs2uitkTuL4ydygePx_89rubyLNm6XV6yh81wW9K-iMhSpwLEiG6FHY9hqJ2kmZOLccjYWMjGRCHBcAHgultJHm5co6vfy3Zu1_lkx3n0=w2400');"
    ></div>
    <div class="top-mask"></div>
    <div class="bottom-mask"></div>
</template>

<style scoped>
.image-component {
    height: 100vh;
}

.top-mask {
    position: relative;
    bottom: 100vh;
    margin-bottom: -50vh;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    background-attachment: fixed;
    background: var(--top-fade);
}

.bottom-mask {
    position: relative;
    bottom: 50vh;
    margin-bottom: -50vh;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    background-attachment: fixed;
    background: var(--bottom-fade);
}
</style>