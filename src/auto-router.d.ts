// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...404]': RouteRecordInfo<'/[...404]', '/:404(.*)', { 404: ParamValue<true> }, { 404: ParamValue<false> }>,
    '/amira/': RouteRecordInfo<'/amira/', '/amira', Record<never, never>, Record<never, never>>,
    '/ben/': RouteRecordInfo<'/ben/', '/ben', Record<never, never>, Record<never, never>>,
    '/ben/cuteConvos': RouteRecordInfo<'/ben/cuteConvos', '/ben/cuteConvos', Record<never, never>, Record<never, never>>,
    '/chris/': RouteRecordInfo<'/chris/', '/chris', Record<never, never>, Record<never, never>>,
    '/chris/blog': RouteRecordInfo<'/chris/blog', '/chris/blog', Record<never, never>, Record<never, never>>,
    'blog Edit': RouteRecordInfo<'blog Edit', '/chris/blog/PostEdit:thisID?', { thisID?: ParamValueZeroOrOne<true> }, { thisID?: ParamValueZeroOrOne<false> }>,
    '/chris/games/[[platform]]/': RouteRecordInfo<'/chris/games/[[platform]]/', '/chris/games/:platform?', { platform?: ParamValueZeroOrOne<true> }, { platform?: ParamValueZeroOrOne<false> }>,
    '/chris/games/full/': RouteRecordInfo<'/chris/games/full/', '/chris/games/full', Record<never, never>, Record<never, never>>,
    '/chris/games/snes': RouteRecordInfo<'/chris/games/snes', '/chris/games/snes', Record<never, never>, Record<never, never>>,
    '/chris/games/top/': RouteRecordInfo<'/chris/games/top/', '/chris/games/top', Record<never, never>, Record<never, never>>,
    '/chris/myGames': RouteRecordInfo<'/chris/myGames', '/chris/myGames', Record<never, never>, Record<never, never>>,
    '/marc/': RouteRecordInfo<'/marc/', '/marc', Record<never, never>, Record<never, never>>,
    '/marc/appHowTo': RouteRecordInfo<'/marc/appHowTo', '/marc/appHowTo', Record<never, never>, Record<never, never>>,
    '/marc/games': RouteRecordInfo<'/marc/games', '/marc/games', Record<never, never>, Record<never, never>>,
    '/marc/nibbles': RouteRecordInfo<'/marc/nibbles', '/marc/nibbles', Record<never, never>, Record<never, never>>,
    '/marc/nibbles/why': RouteRecordInfo<'/marc/nibbles/why', '/marc/nibbles/why', Record<never, never>, Record<never, never>>,
    '/marc/other/paramExample': RouteRecordInfo<'/marc/other/paramExample', '/marc/other/paramExample', Record<never, never>, Record<never, never>>,
    '/mel/': RouteRecordInfo<'/mel/', '/mel', Record<never, never>, Record<never, never>>,
    '/roger/': RouteRecordInfo<'/roger/', '/roger', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
