export default function () {
  this.nuxt.hook('generate:done', (context) => {
    const routesToExclude = []
    const allRoutes = Array.from(context.generatedRoutes)
    const routes = allRoutes.filter((route) => !routesToExclude.includes(route))

    const routesObjects = routes.map((route) => {
      return { url: route, changefreq: route == '/news' ? 'daily' : 'monthly' }
    })
    this.nuxt.options.sitemap.routes = routesObjects
  })
}
