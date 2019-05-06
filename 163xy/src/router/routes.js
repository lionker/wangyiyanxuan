import Main from '../pages/Main/Main.vue'
import Categores from '../pages/Categores/Categores.vue'
import Knowledge from '../pages/Knowledge/Knowledge.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Person from '../pages/Person/Person.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Category from '../pages/Categores/Category'

export default [
  {
    path: '/main',
    component: Main,
    meta: {
      isShow: true
    }
  },
  {
    path: '/person',
    component: Person,
    meta: {
      isShow: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShow: true
    }
  },
  {
    path: '/categores',
    component: Categores,
    meta: {
      isShow: true
    },
    children: [
      {
        path: '/categores/category',
        component: Category,
        meta: {
          isShow: true
        }
      },
      {
        path: '',
        redirect: '/categores/category'
      }
    ]
  },
  {
    path: '/knowledge',
    component: Knowledge,
    meta: {
      isShow: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShow: false
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShow: false
    }
  },
  {
    path: '/',
    redirect: '/main'
  }
]