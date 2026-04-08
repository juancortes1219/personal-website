<template>
  <div class="container-sm mt-5 mb-10">
    <div class="d-flex justify-content-evenly align-items-center flex-wrap mb-2">
      <h1 style="color: var(--accent-one)">Long Exposure</h1>
    </div>
    <lightgallery
      v-if="showLightgallery"
      class="d-flex justify-content-evenly align-items-center flex-wrap"
      :settings="{
        speed: 500,
        download: false,
        plugins: plugins,
        mobileSettings: { controls: false, showCloseIcon: true }
      }"
      :onInit="onInit"
      :onBeforeSlide="onBeforeSlide"
    >
      <a
        v-for="(item, index) in filteredImages"
        :key="index"
        :href="item.link"
        :class="item.classes?.linkClass"
        :data-sub-html="item.caption"
        oncontextmenu="return false;"
      >
        <UnLazyImage
          :key="index"
          :src="item.link"
          :class="item.classes?.imageClass"
          :alt="item.alt"
          :thumbhash="item.thumbhash"
          auto-sizes
        />
        <font-awesome-icon
          :icon="['far', 'eye']"
          :class="item.classes?.iconClass"
          size="xl"
          style="color: #ffffff"
        />
      </a>
    </lightgallery>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Lightgallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import { galleryImages } from '@/assets/gallery/galleryImages'
import type { GalleryImage } from '@/types/galleryItemTypes'

const plugins = ref([lgZoom])
const galleryImagesRef = ref<GalleryImage>(galleryImages)

/* Makes landscape item sizes easier to manipulate */
const landscapeWidth = 320
const landscapeHeight = 213.28
const landscapeIconWidth = landscapeWidth / 2
const landscapeIconHeight = landscapeHeight / 2

const landscapeWidthRef = ref(`${landscapeWidth}px`)
const landscapeHeightRef = ref(`${landscapeHeight}px`)
const landscapeIconWidthRef = ref(`${landscapeIconWidth}px`)
const landscapeIconHeightRef = ref(`${landscapeIconHeight}px`)
/* Makes landscape item sizes easier to manipulate */

/* Makes portrait item sizes easier to manipulate */
const portraitWidth = 142.14
const portraitHeight = 213.28
const portraitIconWidth = portraitWidth / 2
const portraitIconHeight = portraitHeight / 2

// const portraitWidthRef = ref(`${portraitWidth}px`);
const portraitHeightRef = ref(`${portraitHeight}px`)
const portraitIconWidthRef = ref(`${portraitIconWidth}px`)
const portraitIconHeightRef = ref(`${portraitIconHeight}px`)
/* Makes portrait item sizes easier to manipulate */

const onInit = () => {
  console.log('lightGallery has been initialized')
}

const onBeforeSlide = () => {
  console.log('calling before slide')
}

const showLightgallery = ref(false)
const filteredImages = ref<GalleryImage>([])

const filterImages = (key: string, filterValue: string) => {
  filteredImages.value = galleryImagesRef.value.filter((image) => {
    const imageFilters = image.filters as Record<string, string | undefined>

    return imageFilters && imageFilters[key] === filterValue
  })

  showLightgallery.value = !showLightgallery.value
}

onMounted(() => {
  filterImages('long', 'long')
})
</script>

<style scoped>
/* Overlay styles for landscape images */
.overlay-landscape {
  position: relative;
  display: inline-block;
}

/* Overlay transparent before hover */
.overlay-landscape::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: v-bind(landscapeWidthRef);
  height: v-bind(landscapeHeightRef);
  background-color: transparent;
  transition: background-color 0.3s ease;
}

/* Overlay color on hover */
.overlay-landscape:hover::before {
  background-color: rgba(0, 0, 0, 0.5);
}

.overlay-landscape-image {
  margin-bottom: 1rem;
  width: v-bind(landscapeWidthRef);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
}

.overlay-landscape-icon {
  position: absolute;
  top: v-bind(landscapeIconHeightRef);
  left: v-bind(landscapeIconWidthRef);
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Shows the Overlay and Icon on hover */
.overlay-landscape:hover::before,
.overlay-landscape:hover .overlay-landscape-icon {
  opacity: 1;
}
/* Overlay styles for landscape images */

/* Overlay styles for portrait images */
.overlay-portrait {
  position: relative;
  display: inline-block;
}

/* Overlay transparent before hover */
.overlay-portrait::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 142.14px;
  height: 213.28px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

/* Overlay color on hover */
.overlay-portrait:hover::before {
  background-color: rgba(0, 0, 0, 0.5);
}

.overlay-portrait-image {
  margin-bottom: 1rem;
  height: v-bind(portraitHeightRef);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
}

.overlay-portrait-icon {
  position: absolute;
  top: v-bind(portraitIconHeightRef);
  left: v-bind(portraitIconWidthRef);
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Shows the Overlay and Icon on hover */
.overlay-portrait:hover::before,
.overlay-portrait:hover .overlay-portrait-icon {
  opacity: 1;
}
/* Overlay styles for portrait images */
</style>
