import Home from "./Home";
import About from "./About";
import Login from "./Login";
import User from "./Dashboard/User";


const routes = [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: About,
    path: '/about',
    exact: true
  },
  {
    component: Login,
    path: '/login',
    exact: true
  },
  {
    component: User,
    path: '/user',
    exact: true
  },
]

export default routes

