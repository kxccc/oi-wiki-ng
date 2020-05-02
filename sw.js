/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "8dddccc6777ef067bc2f8ba12752582c"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "bf9f315cf51e184613bc94d5eb9f3487"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "525afc16144027a71e5029557f0cfe1d"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "441e85aaaa8b3d7bff52ed7c13cf1008"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "f1a635158dc36637ada14b88965682e2"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "ce63363196651b814206df2d15abe129"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "40782f35e6976a414609da4d75aa2eed"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "416db960bc08e21d3fa017f09e625124"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "cea8a29cab3677455883a745c753e391"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "7d1f80c7839786f29a7d427d92306b9d"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "196cde506374a1b5da5034facf5671a5"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "49a30882f0569107e7b501508df1e97a"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "e017704d778bd8418621a21c31b3a39a"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "2b2078917d16a8b75680d438f107e14a"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "3de9f27c6360f3a9be9ec1ed99e6bb12"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "7c6986cd970db6d3740681104a4a6379"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "14d8476c86c6fe1e005e5e65e6aa07aa"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "3bde0c154ca8ce7fbed4926b729b38fd"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "6429deb47a7f828940ee7d3a22795df7"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "668b7da83ba79d703e347ae3219cb37f"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "f1de0b026c0e6181dac0d2e76324d0d8"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "18cdfd86664c1d39f8ebcb521e963b34"
  },
  {
    "url": "13-0820b45a6673b54d77ce.js"
  },
  {
    "url": "389b49c9270c6cb1b6ad912fe73aaf3b03659c7c-b07c5a1ac9d050f08684.js"
  },
  {
    "url": "app-680cdf9e2f82d3a94069.js"
  },
  {
    "url": "bab4896a-4c6a2a2285764c532d92.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e73c9ff3bef73cbb42d2.js"
  },
  {
    "url": "component---src-pages-404-js-fdd868f7c8ac31f4f176.js"
  },
  {
    "url": "component---src-pages-pages-js-1893f0961efeb025f2bb.js"
  },
  {
    "url": "component---src-pages-search-js-6417eb3d962eefab8bd5.js"
  },
  {
    "url": "component---src-pages-tags-js-61eda0e40ceea8ca9e63.js"
  },
  {
    "url": "component---src-templates-doc-js-40bd44fe23a55fc57f2a.js"
  },
  {
    "url": "component---src-templates-tags-js-febb2dec49cc3bb7c06d.js"
  },
  {
    "url": "framework-3321703c33570853116c.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-b729c27faa6284e9ff45.js"
  },
  {
    "url": "webpack-runtime-c7715275c9d53a08a1c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "18578d8ad0793df89d84875113918862"
  },
  {
    "url": "styles.5142be4472e066a3b0ae.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64367b2f20302a9d6f214569017f012"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-680cdf9e2f82d3a94069.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
