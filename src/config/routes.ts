import IndexPage from '../pages/index'
import NotFound from '../pages/404'

// index
const IndexRouter: RouterTyping.routes = {
  name: '首页',
  path: '/index',
  component: IndexPage
}

// 404 not found
const notFound: RouterTyping.routes = {
  name: '404',
  path: '/*',
  component: NotFound
}

const routes: RouterTyping.routes[] = [
  IndexRouter,
  notFound
]

export default routes
