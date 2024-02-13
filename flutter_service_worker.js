'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "3af1cb29302c582cdd9f0a2d5f0eb9c9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c372ace7a07ee3f5d62e4267b8b0bea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "606cb8ee0798fe7f571093717eee7331",
".git/logs/refs/heads/main": "a06bf7b002ad1c6a3f6d3676efd1bf2d",
".git/logs/refs/remotes/origin/main": "b2501f96025f52d588caddd53ba06359",
".git/objects/02/8eb9ae9ecbb42abba1d659d4cb96f7b46cfe25": "8120a099998d7ebfcb66fd003e6505c3",
".git/objects/03/b18205cbeaf9c466d8d90651c16b0cef93c988": "15235af5b41d9bcf3a2b22aea863b351",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/fad877a21dc17b7113cb829ce4c2db26152d31": "30c46ea7f926ce156be5fa569d0d63d4",
".git/objects/08/ad24afeb5799914e723437701a9468c02ec737": "e221e10bf59f10ac6f4fc71dad30f731",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/bff57e869eb34067505f3a1ace21b51a8de716": "6da5316ce6c828397d5295cdeb647798",
".git/objects/10/7dc57ba58f391cedda767efccf04186718925d": "68c324029876428b456690cb876a0fdb",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1c/4b72087dd2137802f8c32743166507b1b4c57c": "781fe0c3d821679d5176bcdc45d72e13",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/be02a038fdd9c8758fc18be466f6323da44008": "9f38bcbf67cc98b6449cf85683f5bc1a",
".git/objects/26/b6fa12b4f976a59a7a2ea5d982480fcce2cff2": "e8438c75797b29cc17b72d81ffccafed",
".git/objects/26/e234128a07343577cb39e65100e5e381cc9183": "0d4426f5343848031bc6763fda706156",
".git/objects/2b/4a371fcdf07a894f26b950f46561e7504a36ca": "a04c4c32784859e5350794e61823ef17",
".git/objects/31/77d6076d937ff898f31dcccbec97d8571b9b15": "06b02a32d3023fe47046327bafc11d78",
".git/objects/33/4c678c4355b2d30131be9d595e0c9c060bf235": "9f08469a3c3a1dc2a4529c63aacc4079",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/795c12b29210be188f9452fec39e7acc8f7646": "b8a4bd50258d131267e8015e35c2847a",
".git/objects/39/89ce6c3d054f0409bbfeca9adf214551a276cf": "0e4cd5c70a96fd8e539e2b9acb8eb10a",
".git/objects/3b/d832f410769f8fb4c167bbcc8b3d401a3addf8": "a3b7b3c0a2a6635f52466149b7e19edc",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3e/acf86fea75f8aec621db75a30409245bc9ed18": "6ebdf9413c8fa37c80548b7c2f5afd20",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/8322845ecdfa85302797c280a92db56bb2e600": "dfb8d422cfd1c5fb10d74e36b7fa9748",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/97009d4c1f7d4a08da38f558b3e0f48c722868": "6bfc8ce8802a338c01ed57a36411abcb",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/9b86bd26543b4a422cfe1a5ed295e12878afbc": "de3435d0bc98cfda2b0043facede4239",
".git/objects/54/7a31b8735d69814d578739fdd15fac476106b8": "5ef0d434407048660719aec2f9cb737c",
".git/objects/55/736b8aae8b725df0dbd0f4191e62509470ac3a": "39382ddbf0f5386bffe2368fccce761f",
".git/objects/57/767cd247ce86f427cf9e1f239c2f439ab26cb6": "f362340e555ac2105e45f25570abcd75",
".git/objects/57/83aaa3f84941ddaa71ec5c11096cb3a86cc27d": "d53a76a806f8fd09ebb780627d2e906d",
".git/objects/72/31d78a121d8cf067bd968adc9dbca7e03e6555": "f3bf732c6eed60c1cafe825efa70612c",
".git/objects/72/f99709619551d306e1275e6b023c7122a6150a": "8471428f8fdbb662062ed8f9a8bd4e20",
".git/objects/73/9c5b2114351c82d9ac2c97f7a8a7ba32fd8073": "b95f3634abf2b9fcabb03c1afeaba8e7",
".git/objects/74/1ba7984bad1a381914091de9055c34960d1890": "d9d1c59982f8d7a8488afd3617f50260",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8e/f7daed59418a44c9c31e393592dbfced88a61c": "257ad8f925976853604f59855b5456f7",
".git/objects/96/ea3ed9e801b32cd8b33888a830272085764458": "2ae85daccde881d12b179ff629a25c69",
".git/objects/97/aeea8261d2b9ae12a58e66258db67d9472906d": "ddc819a76b29de4a7cd5424ce2b02de2",
".git/objects/97/edf2f7ba8e9121b770c4251d5a1946e17e80d5": "d4e59ede1e7cfd53aaa77cda7dcae654",
".git/objects/9d/b3f991a08a0abcb67fc6b807bfe5b9051ee68f": "bba7c92e995c31f7caddaf40131bcb8e",
".git/objects/9f/d05c19a52e8bcd6c60321e603968af15c78aa1": "f2452ac754628ad76bfa88edaeb4a223",
".git/objects/a1/782690479dbad85604b486beec46c57920313c": "a83623a4ff21fe21dd54bcbec414ecd4",
".git/objects/a5/31f0da54ac3e390ce15bf9b7359ebe8dbb8b20": "6fe618c69a737fee3f846d788a8727b8",
".git/objects/a6/75225bffdd0b94b3f4596c77b68e1b1bcd7be1": "7a214f0857c882cef839d6f63465701c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7393117c40210ce7fc305361c87e55b4283f72": "2ca36718be22b97d28a180018f34c305",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4d3d9379647cb6c9cfa7ba204c032358cef88f": "de7a36aa4da9adeb03c86c8637d8a348",
".git/objects/ba/803843bfa740a0ee48939aa746803b7a20ee19": "9e74c769115a0515d4dc171c21258a3f",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/b30c8854a8bdece1c582d503b010748faf4934": "615b68cb164e4ac4d55705522142c420",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/e8318d6a655d2389d470e3019f2146f413662c": "c71ae49edbacdd9f374bb97785859f62",
".git/objects/c3/234cac452ea34cbfe834a22fd2713a62428759": "2cf4f5ad9c432e880399b767bbe5b429",
".git/objects/c3/a49d13f4f0a4d3e28987e99a06c170297f297d": "b30df91740262ed0ef3f3bba05c40239",
".git/objects/c3/aed13b7d888b9ca167229e12454e9e61f74300": "026abaab77098ade1b83df0c9081781f",
".git/objects/c7/6d4cc8b1d65e0c60317d0d37843865e93e8c25": "fcb59f982e7d565ac5817aefc99be6c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/c2572d91932a37b99572899102fee0d89a1e89": "5fb06e0b68f3e8b6b4e759973c15c25d",
".git/objects/de/cbb7a568d5e4227d28e79cf29284296634f60b": "3bd22674fe8dd22970513e33d9d8ea25",
".git/objects/e8/f3ba63b0e2526333c348119a804843caf516b5": "114d93401503d299625121cc1058c16f",
".git/objects/e9/5fa1ec3fd6bf1ed0c7b2a74e39f45ec240917b": "1b59b12c9eba66deb5a72bb6468166d7",
".git/objects/ea/56969fab224091b79eb013d995ba8c9cf5201d": "8cd65ddfbfe23450d22226d6ee5d01a8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/d081498a27699841b7364adb985d21e5bdd25a": "18400cb1adc4375f06ff9b2c0da35b85",
".git/objects/f3/9a0c0b1b732875b96989fa166148c5a9e5ba1e": "89c2576ec07caebf94e12fa29549bb3f",
".git/objects/f5/4c4f706d1a95cf83c1effc497f248ebe962655": "6016180ea3f0605bea9bfff73d275cca",
".git/objects/f6/d5ae2d4752d0562576f900d71d02b812bf789b": "ed568e674d83514466241c6f87a90442",
".git/objects/fa/0b274606fe7e730af3d210179a3c0e9c3a7a67": "8d07dfdac413b9a70cf59af620319ba5",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/refs/heads/main": "64186faad4cda7522bf0885a4fb31bf0",
".git/refs/remotes/origin/main": "64186faad4cda7522bf0885a4fb31bf0",
"assets/AssetManifest.bin": "2bc1944acc4a29f7903c29248423410d",
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
"index.html": "375ac2d251bec53a02255916e246225d",
"/": "375ac2d251bec53a02255916e246225d",
"main.dart.js": "dfe44d7219246ae9abbd506068e90722",
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
