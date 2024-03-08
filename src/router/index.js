import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
  {
    path: '/governance',
    name: 'governance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GoverView.vue')
  },
  {
    path: '/laporan',
    name: 'laporan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ReporView.vue')
  },
  {
    path: '/berita',
    name: 'berita',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue')
  },
  {
    path: '/pengadaan',
    name: 'pengadaan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProcuView.vue')
  },
  {
    path: '/pabrik',
    name: 'pabrik',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FactoView.vue')
  },
  {
    path: '/media',
    name: 'media',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MediaView.vue')
  },
  {
    path: '/galeri',
    name: 'galeri',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GalerView.vue')
  },
  {
    path: '/sketch',
    name: 'sketch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SketcView.vue')
  },
  {
    path: '/buzz',
    name: 'buzz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BUZZView.vue')
  },
  {
    path: '/complaint',
    name: 'complaint',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TataKelola/Complaint.vue')
  },
  {
    path: '/governance',
    name: 'governance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TataKelola/Governance.vue')
  },
  {
    path: '/wbs',
    name: 'wbs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TataKelola/WBS.vue')
  },
  {
    path: '/audit',
    name: 'audit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TataKelola/AuditCharterPlaque.vue')
  },
  {
    path: '/procurement',
    name: 'procurement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TataKelola/Procurement.vue')
  },
  {
    path: '/ggcp',
    name: 'ggcp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Lingkungan/Pabrik/GGCP.vue')
  },
  {
    path: '/kdm',
    name: 'kdm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Lingkungan/AnakPerusahaan/KDM.vue')
  },
  {
    path: '/penghargaan',
    name: 'penghargaan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile/Award.vue')
  },
  {
    path: '/manajemen',
    name: 'manajemen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile/Management.vue')
  },
  {
    path: '/struktur',
    name: 'struktur',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile/Structure.vue')
  },
  {
    path: '/nilai',
    name: 'nilai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile/Value.vue')
  },
  {
    path: '/visimisi',
    name: 'visimisi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile/VisionMission.vue')
  },
  {
    path: '/sejarah',
    name: 'sejarah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile/History.vue')
  },
  {
    path: '/artikel',
    name: 'artikel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Berita/Article.vue')
  },
  {
    path: '/pers',
    name: 'pers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Berita/Pers.vue')
  },
  {
    path: '/lapkeu',
    name: 'lapkeu',
    component: () => import ('../views/Laporan/Financial.vue')
  },
  {
    path: '/laptah',
    name: 'laptah',
    component: () => import ('../views/Laporan/Yearly.vue')
  },
  {
    path: '/lapkeb',
    name: 'lapkeb',
    component: () => import ('../views/Laporan/Sustainability.vue')
  },
  {
    path: '/sketchy',
    name: 'contact',
    component: () => import ('../views/ContactView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
