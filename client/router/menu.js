// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => () => System.import(`views/${name}${index ? '/index' : ''}.vue`)

export default [
  // {
  //   name: 'Dashboard',
  //   path: '/dashboard',
  //   meta: {
  //     icon: 'fa-tachometer'
  //   },
  //   component: lazyLoading('dashboard', true)
  // },
  {
    name: 'Menu',
    path: '/menudeldia',
    meta: {
      icon: 'fa-bar-chart-o',
      expanded: false,
      auth: true
    },
    component: lazyLoading('menudeldia', true),

    children: [
      {
        name: 'Menu',
        path: '',
        meta: { auth: true },
        component: lazyLoading('menudeldia/Default')
      },
      {
        name: 'Insumos',
        path: 'insumos',
        meta: { auth: true },
        component: lazyLoading('menudeldia/CrearMenu')
      },
      {
        name: 'Consulta',
        path: 'consultar',
        meta: { auth: true },
        component: lazyLoading('menudeldia/ConsultaMenu')
      }
    ]
  },
  {
    name: 'Reservacion',
    path: '/reservacion',
    meta: {
      icon: 'fa-qrcode',
      expanded: false,
      auth: true
    },
    component: lazyLoading('reservacion', true),

    children: [
      {
        name: 'Reservacion',
        path: '',
        meta: { auth: true },
        component: lazyLoading('reservacion/Default')
      },
      {
        name: 'Confirmar Codigo',
        path: 'escanner',
        meta: { auth: true },
        component: lazyLoading('reservacion/ReservaRemota')
      },
      {
        name: 'Consulta',
        path: 'consultar',
        meta: { auth: true },
        component: lazyLoading('reservacion/ConsultaReserva')
      }
    ]
  },
  {
    name: 'Ajustes',
    path: '/ajustes',
    meta: {
      icon: 'fa-gears',
      expanded: false,
      auth: true
    },
    component: lazyLoading('ajustes', true)
  },
  {
    name: 'Appartable',
    path: '/admin',
    meta: {
      icon: 'fa-gg',
      expanded: false,
      auth: true
    },
    component: lazyLoading('admin', true),
    children: [
      {
        name: 'Mis Negocios',
        path: '',
        meta: { auth: true },
        component: lazyLoading('admin/Default')
      },
      {
        name: 'Registro Negocio',
        path: 'registro',
        meta: { auth: true },
        component: lazyLoading('admin/registroNegocio')
      }
    ]
  },
  {
    name: 'Negocio',
    path: '/negocio',
    meta: {
      icon: 'fa-cutlery',
      expanded: false,
      auth: true
    },
    component: lazyLoading('negocio', true),
    children: [
      {
        name: 'Mis Sucursales',
        path: '',
        meta: { auth: true },
        component: lazyLoading('negocio/Default')
      },
      {
        name: 'Registro Sucursal',
        path: 'registro',
        meta: { auth: true },
        component: lazyLoading('negocio/registroSucursal')
      }
    ]
  }
]
