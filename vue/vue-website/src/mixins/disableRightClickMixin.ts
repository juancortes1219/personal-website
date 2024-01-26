const disableRightClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  // Check if the right-click event originated from an image element
  if (target.tagName.toLowerCase() === 'img') {
    event.preventDefault()
  }
}

export default {
  mounted() {
    document.addEventListener('contextmenu', disableRightClick)
  },
  beforeUnmount() {
    document.removeEventListener('contextmenu', disableRightClick)
  }
}
