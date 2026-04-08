const disableRightClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (target.tagName.toLowerCase() === 'img') {
    event.preventDefault()
  }
}

const disableLongPress = (event: TouchEvent) => {
  const target = event.target as HTMLElement

  if (target.tagName.toLowerCase() === 'img') {
    event.preventDefault()
  }
}

export default {
  mounted() {
    document.addEventListener('contextmenu', disableRightClick)
    document.addEventListener('touchstart', disableLongPress, { passive: false })
  },
  beforeUnmount() {
    document.removeEventListener('contextmenu', disableRightClick)
    document.removeEventListener('touchstart', disableLongPress)
  }
}
