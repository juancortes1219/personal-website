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
  <div class="container-sm mt-4">
    <div class="d-flex justify-content-center align-items-center flex-wrap">
      <div>
        <MDBDropdown v-model="dropdownYear">
          <MDBDropdownToggle
            @click="dropdownYear = !dropdownYear"
            :class="{
              'btn-primary-year':
                currentFilter === '2018' ||
                currentFilter === '2019' ||
                currentFilter === '2020' ||
                currentFilter === '2021' ||
                currentFilter === '2022' ||
                currentFilter === '2023' ||
                currentFilter === '2024'
            }"
            :style="getActiveYearStyle()"
          >
            Year
          </MDBDropdownToggle>
          <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
            <MDBDropdownItem
              tag="button"
              @click="filterImages('2018')"
              :style="getActiveStyle('2018')"
              >2018</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('2019')"
              :style="getActiveStyle('2019')"
              >2019</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('2020')"
              :style="getActiveStyle('2020')"
              >2020</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('2021')"
              :style="getActiveStyle('2021')"
              >2021</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('2022')"
              :style="getActiveStyle('2022')"
              >2022</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('2023')"
              :style="getActiveStyle('2023')"
              >2023</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('2024')"
              :style="getActiveStyle('2024')"
              >2024</MDBDropdownItem
            >
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
      <div>
        <MDBDropdown v-model="dropdownCountry">
          <MDBDropdownToggle
            @click="dropdownCountry = !dropdownCountry"
            :class="{
              'btn-primary-country':
                currentFilter === 'costa-rica' ||
                currentFilter === 'mexico' ||
                currentFilter === 'moldova' ||
                currentFilter === 'romania' ||
                currentFilter === 'türkiye'
            }"
            :style="getActiveCountryStyle()"
          >
            Country
          </MDBDropdownToggle>
          <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
            <MDBDropdownItem
              tag="button"
              @click="filterImages('costa-rica')"
              :style="getActiveStyle('costa-rica')"
              >Costa Rica</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('mexico')"
              :style="getActiveStyle('mexico')"
              >Mexico</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('moldova')"
              :style="getActiveStyle('moldova')"
              >Moldova</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('romania')"
              :style="getActiveStyle('romania')"
              >Romania</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('türkiye')"
              :style="getActiveStyle('türkiye')"
              >Türkiye</MDBDropdownItem
            >
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
      <div>
        <MDBDropdown v-model="dropdownCategory">
          <MDBDropdownToggle
            @click="dropdownCategory = !dropdownCategory"
            :class="{
              'btn-primary-category':
                currentFilter === 'ancient' ||
                currentFilter === 'animal' ||
                currentFilter === 'architecture' ||
                currentFilter === 'bw' ||
                currentFilter === 'graduation' ||
                currentFilter === 'long' ||
                currentFilter === 'nature' ||
                currentFilter === 'other' ||
                currentFilter === 'portrait' ||
                currentFilter === 'street' ||
                currentFilter === 'wedding'
            }"
            :style="getActiveCategoryStyle()"
          >
            Category
          </MDBDropdownToggle>
          <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
            <MDBDropdownItem
              tag="button"
              @click="filterImages('ancient')"
              :style="getActiveStyle('ancient')"
              >Ancient Ruins</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('animal')"
              :style="getActiveStyle('animal')"
              >Animal</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('architecture')"
              :style="getActiveStyle('architecture')"
              >Architecture</MDBDropdownItem
            >
            <MDBDropdownItem tag="button" @click="filterImages('bw')" :style="getActiveStyle('bw')"
              >Black and White</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('graduation')"
              :style="getActiveStyle('graduation')"
              >Graduation</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('long')"
              :style="getActiveStyle('long')"
              >Long Exposure</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('nature')"
              :style="getActiveStyle('nature')"
              >Nature</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('other')"
              :style="getActiveStyle('other')"
              >Other</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('portrait')"
              :style="getActiveStyle('portrait')"
              >Portrait</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('street')"
              :style="getActiveStyle('street')"
              >Street</MDBDropdownItem
            >
            <MDBDropdownItem
              tag="button"
              @click="filterImages('wedding')"
              :style="getActiveStyle('wedding')"
              >Wedding</MDBDropdownItem
            >
          </MDBDropdownMenu>
        </MDBDropdown>
      </div>
    </div>
  </div>
  <PhotoGalleryAll v-if="showComponent === 'all'" />
  <PhotoGallery2018 v-if="showComponent === '2018'" />
  <PhotoGallery2019 v-if="showComponent === '2019'" />
  <PhotoGallery2020 v-if="showComponent === '2020'" />
  <PhotoGallery2021 v-if="showComponent === '2021'" />
  <PhotoGallery2022 v-if="showComponent === '2022'" />
  <PhotoGallery2023 v-if="showComponent === '2023'" />
  <PhotoGallery2024 v-if="showComponent === '2024'" />

  <PhotoGalleryCostaRica v-if="showComponent === 'costa-rica'" />
  <PhotoGalleryMexico v-if="showComponent === 'mexico'" />
  <PhotoGalleryMoldova v-if="showComponent === 'moldova'" />
  <PhotoGalleryRomania v-if="showComponent === 'romania'" />
  <PhotoGalleryTurkiye v-if="showComponent === 'türkiye'" />

  <PhotoGalleryAncient v-if="showComponent === 'ancient'" />
  <PhotoGalleryAnimal v-if="showComponent === 'animal'" />
  <PhotoGalleryArchitecture v-if="showComponent === 'architecture'" />
  <PhotoGalleryBW v-if="showComponent === 'bw'" />
  <PhotoGalleryGraduation v-if="showComponent === 'graduation'" />
  <PhotoGalleryLong v-if="showComponent === 'long'" />
  <PhotoGalleryNature v-if="showComponent === 'nature'" />
  <PhotoGalleryOther v-if="showComponent === 'other'" />
  <PhotoGalleryPortrait v-if="showComponent === 'portrait'" />
  <PhotoGalleryStreet v-if="showComponent === 'street'" />
  <PhotoGalleryWedding v-if="showComponent === 'wedding'" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-vue-ui-kit'

import PhotoGalleryAll from '@/components/gallery/category/PhotoGalleryAll.vue'
import PhotoGallery2018 from '@/components/gallery/year/PhotoGallery2018.vue'
import PhotoGallery2019 from '@/components/gallery/year/PhotoGallery2019.vue'
import PhotoGallery2020 from '@/components/gallery/year/PhotoGallery2020.vue'
import PhotoGallery2021 from '@/components/gallery/year/PhotoGallery2021.vue'
import PhotoGallery2022 from '@/components/gallery/year/PhotoGallery2022.vue'
import PhotoGallery2023 from '@/components/gallery/year/PhotoGallery2023.vue'
import PhotoGallery2024 from '@/components/gallery/year/PhotoGallery2024.vue'

import PhotoGalleryCostaRica from '@/components/gallery/country/PhotoGalleryCostaRica.vue'
import PhotoGalleryMexico from '@/components/gallery/country/PhotoGalleryMexico.vue'
import PhotoGalleryMoldova from '@/components/gallery/country/PhotoGalleryMoldova.vue'
import PhotoGalleryRomania from '@/components/gallery/country/PhotoGalleryRomania.vue'
import PhotoGalleryTurkiye from '@/components/gallery/country/PhotoGalleryTurkiye.vue'

import PhotoGalleryAncient from '@/components/gallery/category/PhotoGalleryAncient.vue'
import PhotoGalleryAnimal from '@/components/gallery/category/PhotoGalleryAnimal.vue'
import PhotoGalleryArchitecture from '@/components/gallery/category/PhotoGalleryArchitecture.vue'
import PhotoGalleryBW from '@/components/gallery/category/PhotoGalleryBW.vue'
import PhotoGalleryGraduation from '@/components/gallery/category/PhotoGalleryGraduation.vue'
import PhotoGalleryLong from '@/components/gallery/category/PhotoGalleryLong.vue'
import PhotoGalleryNature from '@/components/gallery/category/PhotoGalleryNature.vue'
import PhotoGalleryOther from '@/components/gallery/category/PhotoGalleryOther.vue'
import PhotoGalleryPortrait from '@/components/gallery/category/PhotoGalleryPortrait.vue'
import PhotoGalleryStreet from '@/components/gallery/category/PhotoGalleryStreet.vue'
import PhotoGalleryWedding from '@/components/gallery/category/PhotoGalleryWedding.vue'

const dropdownYear = ref(false)
const dropdownCountry = ref(false)
const dropdownCategory = ref(false)
const currentFilter = ref('')
const showComponent = ref('')

const getActiveYearStyle = (): object => {
  return {
    backgroundColor: dropdownYear.value ? 'var(--accent-two)' : ''
  }
}
const getActiveCountryStyle = (): object => {
  return {
    backgroundColor: dropdownCountry.value ? 'var(--accent-two)' : ''
  }
}

const getActiveCategoryStyle = (): object => {
  return {
    backgroundColor: dropdownCategory.value ? 'var(--accent-two)' : ''
  }
}

const getActiveStyle = (filterValue: string): object => {
  return {
    backgroundColor: currentFilter.value === filterValue ? 'var(--accent-two)' : '',
    color: currentFilter.value === filterValue ? 'white' : ''
  }
}

const filterImages = (filterValue: string) => {
  currentFilter.value = filterValue
  showComponent.value = filterValue
}

onMounted(() => {
  showComponent.value = '2024'
})
</script>

<style scoped>
.vue-typer {
  --char-typed-color: var(--accent-one) !important;
}

.btn-primary {
  --mdb-btn-bg: var(--mdb-primary);
  --mdb-btn-box-shadow: none;
  --mdb-btn-hover-bg: var(--accent-three);
  --mdb-btn-focus-bg: var(--accent-two);
  --mdb-btn-active-bg: var(--accent-two);
  --mdb-btn-box-shadow-state: none;
}

.btn-primary-year {
  background-color: var(--accent-two);
}

.btn-primary-country {
  background-color: var(--accent-two) !important;
}

.btn-primary-category {
  background-color: var(--accent-two) !important;
}
</style>
