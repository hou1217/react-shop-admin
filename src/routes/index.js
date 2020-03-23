import React from 'react'

import Login from '@/views/login/Login'
import Index from '@/views/admin/dashboard/Index'
import List from '@/views/admin/products/List'
import Edit from '@/views/admin/products/Edit'
import PageNotFound from '@/views/error/404'

const Test1 = React.lazy(()=> import('@/views/admin/products/Test1'))
const Test2 = React.lazy(()=> import('@/views/admin/products/Test2'))

// import Test2 from '@/views/admin/products/Test2'

export const mainRoutes = [
  {
    path:"/login",
    component:Login
  },
  {
    path:"/404",
    component:PageNotFound
  }
]
export const adminRoutes = [
  {
    path:"/admin/dashboard",
    component:Index,
    isShow:true,
    title:'看板',
    icon:'area-chart'
  },
  {
    path:"/admin/products/list",
    component:List,
    exact:true,
    title:'商品列表',
    icon:'shop',
  },
  {
    path:"/admin/products/test1",
    component:Test1,
    exact:true,
    title:'测试一',
    icon:'shop',
  },
  {
    path:"/admin/products/test2",
    component:Test2,
    exact:true,
    title:'测试二',
    icon:'shop',
  },
  {
    path:"/admin/products/edit/:id?",
    component:Edit
  },
]