/**
 * 大屏等比缩放适配（固定1920×1080设计稿，按窗口比例缩放居中）
 */
export function useScreenScale() {
  const DESIGN_W = 1920
  const DESIGN_H = 1080

  const onResize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    const scaleX = w / DESIGN_W
    const scaleY = h / DESIGN_H
    const scale = Math.min(scaleX, scaleY)
    document.body.style.background = 'url("/bgd.gif") no-repeat center'
    document.body.style.backgroundSize = 'cover'
    const app = document.getElementById('app') as HTMLElement
    if (app) {
      app.style.transform = `scale(${scale}) translate(-50%, -50%)`
      app.style.transformOrigin = '0 0'
      app.style.width = DESIGN_W + 'px'
      app.style.height = DESIGN_H + 'px'
      app.style.position = 'absolute'
      app.style.left = '50%'
      app.style.top = '50%'
      app.style.overflow = 'hidden'
      app.style.background = '#040e21'
    }
  }

  window.addEventListener('resize', onResize)
  onResize()

  return () => window.removeEventListener('resize', onResize)
}
