/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ServiciosIndexImport } from './routes/servicios/index'
import { Route as ProductosIndexImport } from './routes/productos/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as AsistenciasIndexImport } from './routes/asistencias/index'
import { Route as AuthLayoutImport } from './routes/auth/_layout'
import { Route as AuthLayoutLoginImport } from './routes/auth/_layout/login'

// Create Virtual Routes

const AuthImport = createFileRoute('/auth')()

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ServiciosIndexRoute = ServiciosIndexImport.update({
  id: '/servicios/',
  path: '/servicios/',
  getParentRoute: () => rootRoute,
} as any)

const ProductosIndexRoute = ProductosIndexImport.update({
  id: '/productos/',
  path: '/productos/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthRoute,
} as any)

const AsistenciasIndexRoute = AsistenciasIndexImport.update({
  id: '/asistencias/',
  path: '/asistencias/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLayoutRoute = AuthLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLayoutLoginRoute = AuthLayoutLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/auth/_layout': {
      id: '/auth/_layout'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthLayoutImport
      parentRoute: typeof AuthRoute
    }
    '/asistencias/': {
      id: '/asistencias/'
      path: '/asistencias'
      fullPath: '/asistencias'
      preLoaderRoute: typeof AsistenciasIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/'
      fullPath: '/auth/'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof AuthImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/productos/': {
      id: '/productos/'
      path: '/productos'
      fullPath: '/productos'
      preLoaderRoute: typeof ProductosIndexImport
      parentRoute: typeof rootRoute
    }
    '/servicios/': {
      id: '/servicios/'
      path: '/servicios'
      fullPath: '/servicios'
      preLoaderRoute: typeof ServiciosIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/_layout/login': {
      id: '/auth/_layout/login'
      path: '/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLayoutLoginImport
      parentRoute: typeof AuthLayoutImport
    }
  }
}

// Create and export the route tree

interface AuthLayoutRouteChildren {
  AuthLayoutLoginRoute: typeof AuthLayoutLoginRoute
}

const AuthLayoutRouteChildren: AuthLayoutRouteChildren = {
  AuthLayoutLoginRoute: AuthLayoutLoginRoute,
}

const AuthLayoutRouteWithChildren = AuthLayoutRoute._addFileChildren(
  AuthLayoutRouteChildren,
)

interface AuthRouteChildren {
  AuthLayoutRoute: typeof AuthLayoutRouteWithChildren
  AuthIndexRoute: typeof AuthIndexRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLayoutRoute: AuthLayoutRouteWithChildren,
  AuthIndexRoute: AuthIndexRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth': typeof AuthLayoutRouteWithChildren
  '/asistencias': typeof AsistenciasIndexRoute
  '/auth/': typeof AuthIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/productos': typeof ProductosIndexRoute
  '/servicios': typeof ServiciosIndexRoute
  '/auth/login': typeof AuthLayoutLoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth': typeof AuthIndexRoute
  '/asistencias': typeof AsistenciasIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/productos': typeof ProductosIndexRoute
  '/servicios': typeof ServiciosIndexRoute
  '/auth/login': typeof AuthLayoutLoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth': typeof AuthRouteWithChildren
  '/auth/_layout': typeof AuthLayoutRouteWithChildren
  '/asistencias/': typeof AsistenciasIndexRoute
  '/auth/': typeof AuthIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/productos/': typeof ProductosIndexRoute
  '/servicios/': typeof ServiciosIndexRoute
  '/auth/_layout/login': typeof AuthLayoutLoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth'
    | '/asistencias'
    | '/auth/'
    | '/dashboard'
    | '/productos'
    | '/servicios'
    | '/auth/login'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth'
    | '/asistencias'
    | '/dashboard'
    | '/productos'
    | '/servicios'
    | '/auth/login'
  id:
    | '__root__'
    | '/'
    | '/auth'
    | '/auth/_layout'
    | '/asistencias/'
    | '/auth/'
    | '/dashboard/'
    | '/productos/'
    | '/servicios/'
    | '/auth/_layout/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  AsistenciasIndexRoute: typeof AsistenciasIndexRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  ProductosIndexRoute: typeof ProductosIndexRoute
  ServiciosIndexRoute: typeof ServiciosIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  AsistenciasIndexRoute: AsistenciasIndexRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  ProductosIndexRoute: ProductosIndexRoute,
  ServiciosIndexRoute: ServiciosIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auth",
        "/asistencias/",
        "/dashboard/",
        "/productos/",
        "/servicios/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auth": {
      "filePath": "auth",
      "children": [
        "/auth/_layout",
        "/auth/"
      ]
    },
    "/auth/_layout": {
      "filePath": "auth/_layout.tsx",
      "parent": "/auth",
      "children": [
        "/auth/_layout/login"
      ]
    },
    "/asistencias/": {
      "filePath": "asistencias/index.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx",
      "parent": "/auth"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/productos/": {
      "filePath": "productos/index.tsx"
    },
    "/servicios/": {
      "filePath": "servicios/index.tsx"
    },
    "/auth/_layout/login": {
      "filePath": "auth/_layout/login.tsx",
      "parent": "/auth/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
