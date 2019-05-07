import Main from '../pages/Main/Main.vue'
import Categores from '../pages/Categores/Categores.vue'
import Knowledge from '../pages/Knowledge/Knowledge.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Person from '../pages/Person/Person.vue'
import Search from '../pages/Search/Search.vue'
import Category from '../pages/Categores/Category'
import KnowFind from '../pages/Knowledge/KnowFind/KnowFind.vue'
import KnowSelect from '../pages/Knowledge/KnowSelect/KnowSelect.vue'
import Login from '../pages/Person/Login/Login.vue'
import Register from '../pages/Person/Register/Register.vue'

export default [
  {
    path: '/main',
    component: Main,
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
    },
    children: [
      {
        path: '/knowledge/select',
        component: KnowSelect
      },
      {
        path: '/knowledge/find',
        component: KnowFind,
        meta: {
          isShow: true
        }
      },
      {
        path: '',
        redirect: '/knowledge/find'
      }
    ]
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShow: false
    }
  },
  {
    path: '/person',
    component: Person,
    children: [
      {
        path: '/person/login',
        component: Login
      },
      {
        path: '/person/register',
        component: Register
      },
      {
        path: '',
        redirect: '/person/login'
      }
    ]
  },
  {
    path: '/',
    redirect: '/main'
  }
]