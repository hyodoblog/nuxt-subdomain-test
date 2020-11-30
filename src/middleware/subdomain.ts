import { Middleware } from '@nuxt/types'

const subdomainMiddleware: Middleware = ({ req, redirect }) => {
  const host = req.headers.host
  if (host) {
    const subdomain = host.substring(0, host.indexOf('.'))
    console.log(subdomain)
    return
  }

  redirect('https://hyodoblog.com')
}

export default subdomainMiddleware
