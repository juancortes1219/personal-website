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
                        <div class="portrait">
                            <img id="portrait" src="https://lh3.googleusercontent.com/pw/ABLVV86ARW9nJPd2L2vJ2i3ZGfwyfNpQVzDKymgoXrwjgAQ2JrN4ebCddqcdSWgM37nq-RmrEA_rYWsd6_5PZWQ4vpqHuIeSkEuk7hMlEwMujEF5N4_snom6Se2nC4vXT5rYVRNg3xhPWbDnXBGJN4bhliB2a9vOAR5dm9Y0OOA89z5QpCC2CFtONQs1CrUSydcK8ceEBuLVOSeqElRokzC7n_iR-g2rT-ZFGgGmjl4Nh68m6h1hQmKlE0F0H7nZaBY8FaAI6a7-OtlCGzkqlbFOgDo-pK8eqQKiM9yfFlDqczhNJ_A3XttqXGQ9zKYl7XBE8LVhdwmzVg_EreUdWtxPWPsVEjzwgZy5AdfL2vyNyfY9ykfkEoq_rhE3PVjqcccK1wx7YGlPHXS9KZ0yagqrjCM7fh7E0z0moUs4584Ph4nEaS5lOerTwKZRtItBM2xW9rYCfcIT7XvqMpvysd1huEAcCJrSJH6lZ5B2_OmjcH746ggIBFIC-VMsUoqMMBtURPhUNWY-T3odhFZ-3ZhlcPkVhuT1uygd8ZwIbHAsxw5eaUTlm1E4Vt8OwkJ3nCeqIGWp38edSohab1chMI1V3uLIq5rZiEtEsJKVyjlYKIW8RsLV_AIGELvwMshjG033_RQSEWZJ0gDfpPQnYJIJDrDRmZpVgh59nVgpuXnlczF0W99dlT3h32NVHMt0BNDbMRZ7XNpyU_fCU0k8pr8CgWXMQXE180usNNtETZ6eWGOlqHfgZxpt0kEYav7HzF_m-DmyP1rZ_sh0tZxtDI_xwYpSvwuQJZsPCravy6HhkzuWzHX1Zmggi8AkLGfZFveg9No9AuC1r3xZGESBAYz_NtFEMsSpwZVYNRtA8XC8bBmmVuZMgLCqnRMj6hP7ehTf0w=w619-h619-s-no?authuser=0" class="img-fluid z-depth-1" alt="My photo" v-motion-slide-visible-once-left>
                        </div>
                    </div>
                    <!--/First column-->
                    <!--Second column-->
                    <div class="col-lg-6 offset-lg-1 col-md-12 about-p">
                        <!--Description-->
                        <p align="justify" v-motion-slide-visible-once-right>I am a {{ currentAge }} year old in love with Programming, Photography, and Jesus.
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
.portrait {
    display: flex;
    justify-content: center;
    align-items: center;
}

#portrait {
    border-radius: 50%;
    width: 75%;
    /* height: 50%; */
}

@media (min-width: 1024px) {
    .about-p {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>