// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open('jacobsvenssondesignCache').then(jacobsvenssondesignCache => {
            jacobsvenssondesignCache.addAll([
                '.',
                '/index.html',
                '/work/index.html',
                '/blog/index.html',
                '/about/index.html',
                '/assets/css/main.css',
                '/assets/js/swup.css',
                '/assets/js/index.css',
            ]);
        }),
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    fetchEvent.respondWith(
        fetch(request)
            .then(responseFromFetch => {
                return responseFromFetch;
            })
            .catch(fetchError => {
                caches.match(request)
                    .then(responseFromCache => {
                        if (responseFromCache) {
                            return responseFromCache;
                        } else {
                            if (request.headers.get('Accept').includes('text/html')) {
                                return caches.match('/index.html');
                            }
                        }
                    })
            })
    );
});
