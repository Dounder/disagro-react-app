/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ServiciosIndexImport } from './routes/servicios/index'
import { Route as ProductosIndexImport } from './routes/productos/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as AsistenciasIndexImport } from './routes/asistencias/index'
import { Route as AuthLoginImport } from './routes/auth/login'

// Create/Update Routes

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

const AuthIndexRoute = AuthIndexImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const AsistenciasIndexRoute = AsistenciasIndexImport.update({
  id: '/asistencias/',
  path: '/asistencias/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
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
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
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
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
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
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/asistencias': typeof AsistenciasIndexRoute
  '/auth': typeof AuthIndexRoute
  '/productos': typeof ProductosIndexRoute
  '/servicios': typeof ServiciosIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/asistencias': typeof AsistenciasIndexRoute
  '/auth': typeof AuthIndexRoute
  '/productos': typeof ProductosIndexRoute
  '/servicios': typeof ServiciosIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/asistencias/': typeof AsistenciasIndexRoute
  '/auth/': typeof AuthIndexRoute
  '/productos/': typeof ProductosIndexRoute
  '/servicios/': typeof ServiciosIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth/login'
    | '/asistencias'
    | '/auth'
    | '/productos'
    | '/servicios'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth/login'
    | '/asistencias'
    | '/auth'
    | '/productos'
    | '/servicios'
  id:
    | '__root__'
    | '/'
    | '/auth/login'
    | '/asistencias/'
    | '/auth/'
    | '/productos/'
    | '/servicios/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AsistenciasIndexRoute: typeof AsistenciasIndexRoute
  AuthIndexRoute: typeof AuthIndexRoute
  ProductosIndexRoute: typeof ProductosIndexRoute
  ServiciosIndexRoute: typeof ServiciosIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthLoginRoute: AuthLoginRoute,
  AsistenciasIndexRoute: AsistenciasIndexRoute,
  AuthIndexRoute: AuthIndexRoute,
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
        "/auth/login",
        "/asistencias/",
        "/auth/",
        "/productos/",
        "/servicios/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/asistencias/": {
      "filePath": "asistencias/index.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/productos/": {
      "filePath": "productos/index.tsx"
    },
    "/servicios/": {
      "filePath": "servicios/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
