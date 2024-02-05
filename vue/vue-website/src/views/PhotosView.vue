<template>
  <div class="d-flex justify-content-center align-items-center flex-column mt-5">
    <h1>My Photos</h1>
    <h4>
      <VueTyper
        :text="['choose a filter', 'more photos coming soon']"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="erasing"
        :pre-type-delay="1000"
        :type-delay="70"
        :pre-erase-delay="3000"
        :erase-delay="70"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="blink"
      ></VueTyper>
    </h4>
  </div>
  <div class="container-sm mt-4 mb-4">
    <div class="mb-6">
      <div class="d-flex justify-content-center align-items-center flex-wrap mb-4">
        <!-- <MDBBtn @click="filterImages('all')" :class="{ 'active-filter': currentFilter === 'all' }" class="mb-1"> All </MDBBtn> -->
        <MDBBtn
          @click="filterImages('2018')"
          :class="{ 'active-filter': currentFilter === '2018' }"
          class="mb-1"
        >
          2018
        </MDBBtn>
        <MDBBtn
          @click="filterImages('2019')"
          :class="{ 'active-filter': currentFilter === '2019' }"
          class="disabled mb-1"
        >
          2019
        </MDBBtn>
        <MDBBtn
          @click="filterImages('2020')"
          :class="{ 'active-filter': currentFilter === '2020' }"
          class="disabled mb-1"
        >
          2020
        </MDBBtn>
        <MDBBtn
          @click="filterImages('2021')"
          :class="{ 'active-filter': currentFilter === '2021' }"
          class="disabled mb-1"
        >
          2021
        </MDBBtn>
        <MDBBtn
          @click="filterImages('2022')"
          :class="{ 'active-filter': currentFilter === '2022' }"
          class="disabled mb-1"
        >
          2022
        </MDBBtn>
        <MDBBtn
          @click="filterImages('2023')"
          :class="{ 'active-filter': currentFilter === '2023' }"
          class="disabled mb-1"
        >
          2023
        </MDBBtn>
      </div>
      <div class="d-flex justify-content-center align-items-center flex-wrap mb-4">
        <MDBBtn
          @click="filterImages('nature')"
          :class="{ 'active-filter': currentFilter === 'nature' }"
          class="mb-1"
        >
          Nature
        </MDBBtn>
        <MDBBtn
          @click="filterImages('portrait')"
          :class="{ 'active-filter': currentFilter === 'portrait' }"
          class="mb-1"
        >
          Portrait
        </MDBBtn>
        <MDBBtn
          @click="filterImages('street')"
          :class="{ 'active-filter': currentFilter === 'street' }"
          class="mb-1"
        >
          Street
        </MDBBtn>
        <MDBBtn
          @click="filterImages('b&w')"
          :class="{ 'active-filter': currentFilter === 'b&w' }"
          class="disabled mb-1"
        >
          B&W
        </MDBBtn>
        <MDBBtn
          @click="filterImages('architecture')"
          :class="{ 'active-filter': currentFilter === 'architecture' }"
          class="mb-1"
        >
          Architecture
        </MDBBtn>
        <MDBBtn
          @click="filterImages('other')"
          :class="{ 'active-filter': currentFilter === 'other' }"
          class="mb-1"
        >
          Other
        </MDBBtn>
        <MDBBtn
          @click="filterImages('long')"
          :class="{ 'active-filter': currentFilter === 'long' }"
          class="mb-1"
        >
          Long Exposure
        </MDBBtn>
      </div>
    </div>
  </div>
  <PhotoGalleryAll v-if="showComponent === 'all'" />
  <PhotoGallery2018 v-if="showComponent === '2018'" />
  <!-- <PhotoGallery2019 v-if="showComponent === 2019" /> -->
  <!-- <PhotoGallery2020 v-if="showComponent === 2020"/> -->
  <!-- <PhotoGallery2021 v-if="showComponent === 2021"/> -->
  <!-- <PhotoGallery2022 v-if="showComponent === 2022"/> -->
  <!-- <PhotoGallery2023 v-if="showComponent === 2023"/> -->
  <PhotoGalleryNature v-if="showComponent === 'nature'" />
  <PhotoGalleryPortrait v-if="showComponent === 'portrait'" />
  <PhotoGalleryStreet v-if="showComponent === 'street'" />
  <PhotoGalleryBW v-if="showComponent === 'b&w'" />
  <PhotoGalleryArchitecture v-if="showComponent === 'architecture'" />
  <PhotoGalleryOther v-if="showComponent === 'other'" />
  <PhotoGalleryLong v-if="showComponent === 'long'" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MDBBtn } from 'mdb-vue-ui-kit'
import PhotoGalleryAll from '@/components/gallery/category/PhotoGalleryAll.vue'
import PhotoGallery2018 from '@/components/gallery/year/PhotoGallery2018.vue'
// import PhotoGallery2019 from '@/components/gallery/year/PhotoGallery2019.vue'
// import PhotoGallery2020 from '@/components/gallery/year/PhotoGallery2020.vue'
// import PhotoGallery2021 from '@/components/gallery/year/PhotoGallery2021.vue'
// import PhotoGallery2022 from '@/components/gallery/year/PhotoGallery2022.vue'
// import PhotoGallery2023 from '@/components/gallery/year/PhotoGallery2023.vue'
import PhotoGalleryNature from '@/components/gallery/category/PhotoGalleryNature.vue'
import PhotoGalleryPortrait from '@/components/gallery/category/PhotoGalleryPortrait.vue'
import PhotoGalleryStreet from '@/components/gallery/category/PhotoGalleryStreet.vue'
import PhotoGalleryBW from '@/components/gallery/category/PhotoGalleryBW.vue'
import PhotoGalleryArchitecture from '@/components/gallery/category/PhotoGalleryArchitecture.vue'
import PhotoGalleryOther from '@/components/gallery/category/PhotoGalleryOther.vue'
import PhotoGalleryLong from '@/components/gallery/category/PhotoGalleryLong.vue'

const currentFilter = ref('')
const showComponent = ref('')

const filterImages = (filterValue: string) => {
  currentFilter.value = filterValue
  showComponent.value = filterValue
}

onMounted(() => {
  showComponent.value = 'all'
})
</script>

<style scoped>
.vue-typer {
  --char-typed-color: var(--accent-one) !important;
}

.btn {
  width: fit-content;
  --mdb-btn-bg: var(--mdb-primary) !important;
  --mdb-btn-color: white !important;
}
.btn:hover {
  background-color: var(--accent-three);
}

.active-filter {
  background-color: var(--accent-two);
}

.btn.disabled {
  background-color: var(--mdb-primary);
  opacity: 0.3;
}

@media (min-width: 768px) {
  .btn {
    margin-right: 0.5rem;
    font-size: 1rem;
  }
}
</style>
