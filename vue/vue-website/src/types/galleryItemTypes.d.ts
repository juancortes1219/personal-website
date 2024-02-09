interface ImageItem {
  filters?: {
    all?: string
    year?: string
    country?: string
    architecture?: string
    bw?: string
    graduation?: string
    long?: string
    nature?: string
    other?: string
    portrait?: string
    street?: string
    wedding?: string
  }
  link: string
  classes: {
    linkClass: string
    imageClass: string
    iconClass: string
  }
  alt: string
  caption: string
  thumbhash: string
}

// Define the structure for your gallery images array
interface GalleryImage extends Array<ImageItem> {}

// Export the types
export { ImageItem, GalleryImage }
