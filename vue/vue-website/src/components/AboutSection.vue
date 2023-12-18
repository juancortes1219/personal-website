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
    <div class="container-fluid">
        <div class="container pt-3">
            <!-- Section About -->
            <section class="section pt-2">
                <span id="about"></span>
                <!--Section heading-->
                <h1 class="text-center text-uppercase font-weight-bold mt-5 mb-3 mt-4" v-motion-slide-visible-once-bottom>About
                me</h1>
                <!-- First row -->
                <div class="row mt-4 pt-5">
                    <!--First column-->
                    <div class="col-lg-5 col-md-12 mb-5">
                        <!--Image-->
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="https://lh3.googleusercontent.com/pw/ABLVV86THcuyHj40g8SuCPb6ra1_a8j9PvxB9AvmJV9d_SmPshqzw8rTFj7d3v-19zwpoj27bsgkiZuGD0bkD_oW1FZfIkhco8wAkTyy6kTi-queGZhY-ogoJQ2GXIVgPNtROIkEWuZcWIQ_heIJpT0Ich9Bs6TNMH3UW0h3xc8f6zKiuJCteSOR_kPorqcL9awRzQEKGIh8N1FP6lzRyWTNVFtD9pNB96_qGI9L4FfZhGQzhKbJtcR4_IKf5jUhX0GZk3WcD2KTAoZmpGYIAQf4JQHZWpTEQU7s-v-U_HtNqgsWc8dosPStqU_LP5BzAdaUH_SEKotIU1g1bs2xImN-WVpm1fuOw23D7gHCeObPRXANCJ4C0VRVs6m0O4Itjuc0KJPGle11F5R-Y7uQ08FZCss-4L9K2Y-bwKlLOfytbwmV91D6jkEGSoQdoOLrwEDKVPDJMfziHrzzlDndJWQ8K4gstm8S9H2DzKptPhLqvhA5BBfOgWIHi0RZXS753P7fOCYr_f-ZGN0QsM67cmeGUdAUPRwWoOOkEWiGA83csw51BQlOM77zloJ_1-pWmX2g9eXDMZKt0b-oLIqL7e4FXD8ZZ3heaRVBbpOwsbiS28plM6L0VyktERbnWq09a3vQHUK7KQV2jRba8TiopUjhg0l56zuxW3U6b0CPD6T4AiBIy-lKxNRGirpE7jmXd7EZedjiUXzQffdAP9by6inJcddyiDvtOe5d0O2L0dzSyC1GeGHLbbSbNQJD8bUjCOdCQF8YiAvgEQ_itA8GBV2dqo21HgwHMBN49ChXBw5OT48JTTIw8fRTS0kS62EH7MoIoEafAqEnlCyRhXn028f5naVWnZDkXC2yJWYV097BYGJdk11H32-rMTVYe0rECdlvQA=w1000" class="img-fluid rounded-circle w-75" alt="My photo" v-motion-slide-visible-once-left>
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
@media (min-width: 992px) {
    .about-p {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>