// Mutable store for scroll/mouse state — read by useFrame without React re-renders
export const scrollStore = {
  progress: 0,
  mouseX: 0,
  mouseY: 0,
}
