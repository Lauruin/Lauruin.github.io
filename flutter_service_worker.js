'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2bc1944acc4a29f7903c29248423410d",
"assets/AssetManifest.bin.json": "0cdd64f628519fec396ab3069b3824f1",
"assets/AssetManifest.json": "b14ced46cc1fe68b3ab8457704b62c90",
"assets/assets/fonts/Georama-Bold.ttf": "17d239058738c9324f267de6475c2dcc",
"assets/assets/fonts/Georama-Medium.ttf": "776c555ca502d31aecbfed888536d9a5",
"assets/assets/fonts/Georama-Regular.ttf": "f29d89317a0afa6410347febef7ef2c2",
"assets/assets/images/animation-waiting/waiting-1.png": "f8492e7d5b6c5e64db9c76fb0ff05ba9",
"assets/assets/images/animation-waiting/waiting-10.png": "6731765b4344b4922367e83e30cad8c2",
"assets/assets/images/animation-waiting/waiting-11.png": "c7bb093c4a745a32c897eb3826c3aaaa",
"assets/assets/images/animation-waiting/waiting-12.png": "b0e4836b4e0f04e834c7440216bd77ad",
"assets/assets/images/animation-waiting/waiting-13.png": "adaca30b87c423fd642c499026cf335a",
"assets/assets/images/animation-waiting/waiting-14.png": "070bed48d9d26995a65d70579025346e",
"assets/assets/images/animation-waiting/waiting-15.png": "50821082c84c2dd047b48757751b1059",
"assets/assets/images/animation-waiting/waiting-16.png": "6c0433276e267c56a7b63fc573417ecd",
"assets/assets/images/animation-waiting/waiting-17.png": "9abf919322287b7f7f6ea75ade4c096a",
"assets/assets/images/animation-waiting/waiting-18.png": "db597a95e22c3c3488ce7f895ff7a8c4",
"assets/assets/images/animation-waiting/waiting-19.png": "1c0f7cc70e7ca137bc18d977b9c2aba3",
"assets/assets/images/animation-waiting/waiting-2.png": "032fc8821e9bc66be0b8ae69d3ca2ef4",
"assets/assets/images/animation-waiting/waiting-3.png": "9c06467a61054487a3be759d3d4de1ed",
"assets/assets/images/animation-waiting/waiting-4.png": "438c9a95741c5b7b538a1ae2989d033b",
"assets/assets/images/animation-waiting/waiting-5.png": "158033871fdee026b8bbc9f3a18e305e",
"assets/assets/images/animation-waiting/waiting-6.png": "d1d0aa97d9b2a9f7ad5f9ebdad3d18e1",
"assets/assets/images/animation-waiting/waiting-7.png": "7b19b86ce1cc42be40e6b339fefee244",
"assets/assets/images/animation-waiting/waiting-8.png": "008938063c898ec010d84b3d90a7b15d",
"assets/assets/images/animation-waiting/waiting-9.png": "be4c05e6ed69ed834e207b419124324c",
"assets/assets/images/background_desktop.png": "c89bdd16966b3dada40abf7c29a337ce",
"assets/assets/images/background_desktop.svg": "47d44753aad0cf903901908a2b714a85",
"assets/assets/images/background_mobile.png": "ba98200e2a9f96cd3c2b367407b2bd61",
"assets/assets/images/logo_quizzz.png": "5e70d75d6b12863bf1ab1a32bd77a6b7",
"assets/assets/images/schlange-fragezeichen.png": "86133736900ee3099c57028234361634",
"assets/assets/images/schlange-maskottchen-laden.png": "6bb27adc43855e52ad00d142653713b1",
"assets/assets/images/schlange-maskottchen_fragezeichen.png": "2d837f9071d58a38479965af4c2a3689",
"assets/assets/images/schlange_maskottchen_1.png": "ae046c8caffedf42912a6f5501a5b5b9",
"assets/assets/images/schlange_maskottchen_1_cropped.png": "5a9e7a2dd22fb8fbd9da9b5d4f49ec02",
"assets/FontManifest.json": "6bff3606f42037076886b19cc832b470",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "b717eaab9e179e71bde09f157d4cbcbd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cb769c51fdc627c99260e66ae6c0bc56",
"assets/packages/flutter_boxicons/fonts/BoxIcons.ttf": "f5b4c7852b2cea0ec78fcbd63d6547ae",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e811ec836a78f0f182a03b22b6d7826b",
"/": "e811ec836a78f0f182a03b22b6d7826b",
"main.dart.js": "06c01e8b3b79163507336a3ca6ea5468",
"manifest.json": "dbccea97ce03bc701d5eb6ba84695d48",
"version.json": "dc01e169820f8311369ef931ddda7c8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
