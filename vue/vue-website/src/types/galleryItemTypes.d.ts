interface ImageItem {
  filters?: {
    all?: string
    year?: string
    nature?: string
    portrait?: string
    street?: string
    black?: string
    architecture?: string
    other?: string
    long?: string
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
