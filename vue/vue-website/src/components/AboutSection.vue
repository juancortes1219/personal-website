<script setup lang="ts">
/* Calculates my current age */
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const currentAge = getAge("1996/12/19");
/* Calculates my current age */
</script>

<template>
    <div class="container-fluid about-section mb-5">
        <!-- First container -->
        <div class="container pt-3">
            <!-- Section About -->
            <section class="section pt-2 pb-5">
                <span id="about"></span>
                <!--Section heading-->
                <h1 class="text-center text-uppercase font-weight-bold mt-5 mb-3 mt-4" v-motion-slide-visible-once-bottom>About
                me</h1>
                <!-- First row -->
                <div class="row mt-4 pt-5">
                    <!--First column-->
                    <div class="col-lg-5 col-md-12 mb-5">
                        <!--Image-->
                        <img src="https://mdbootstrap.com/img/Others/121.jpg" class="img-fluid z-depth-1" alt="My photo" v-motion-slide-visible-once-left>
                    </div>
                    <!--/First column-->
                    <!--Second column-->
                    <div class="col-lg-6 offset-lg-1 col-md-12">
                        <!--Description-->
                        <p class="grey-text mb-4" align="justify" v-motion-slide-visible-once-right>I am a {{ currentAge }} year old in love with Programming, Photography, and Jesus.
                            From a taking a basic programming class and my general interest in technology, my love for Programming was
                            sparked during my sophomore year in high school. That said, I decided to attend Georgia State University
                            and major in Computer Science. I didn't get interested in Photography until the summer of 2016. That
                            summer I got the oppurtunity to go on a mission trip with my church to Costa Rica where I took a lot of
                            photos. From then on, my love for Photography grew, and I decided to get a minor in Art (Photography).
                            Moving foward, I graduated from Georgia State University in May of 2020.</p>
                    </div>
                    <!--/Second column-->
                </div>
                <!-- /.First row -->
            </section>
        <!-- /.Section About -->
        </div>
    </div>
</template>

<style scoped>
.about-section {
    height: 100vh;
}
#about {
    /* position: absolute; */
    /* top: calc(100vh + 10px); */
    /* height: 100vh; */
}
</style>