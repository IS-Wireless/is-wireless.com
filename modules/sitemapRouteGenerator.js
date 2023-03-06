export default function () {
  this.nuxt.hook('generate:done', (context) => {
    const routesToExclude = ['/p/']
    const allRoutes = Array.from(context.generatedRoutes)
    const routes = allRoutes.filter((route) => !routesToExclude.includes(route))

    this.nuxt.options.sitemap.routes = [...routes]
  })
}
