export function easeOutExpo(time: number, duration: number): number {
  return 1 - Math.pow(2, (-13 * time) / duration)
}
