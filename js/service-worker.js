workbox.core.setCacheNameDetails({prefix: "transpais-wics"});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.routing.registerNavigationRoute("/")
workbox.routing.registerNavigationRoute("/FM.3/index.html")

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET')