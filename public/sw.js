var cache_files = [
    'https://code.jquery.com/jquery-3.3.1.min.js',
    '/',
    '/index.html',

    '/css/mainframe.css',

    '/js/app.js',
    '/js/control.js',
    '/js/adjustcontrols.js',

    '/font/adobe-std-b.otf',

    '/img/footer/chat_btn.png',
    '/img/footer/chat_selected_btn.png',
    '/img/footer/home_btn.png',
    '/img/footer/home_selected_btn.png',
    '/img/footer/profile_btn.png',
    '/img/footer/profile_selected_btn.png',

    '/inside_frame/Home/Home.html',
    '/inside_frame/Home/pageinfo.js',
    '/inside_frame/Home/pageinfo.js',
    '/inside_frame/Home/img/go_btn.png',
    '/inside_frame/Home/img/noodles.png'
];

self.addEventListener('install', function(event) {
    console.log("SW Installed");
    event.waitUntil(
        caches.open('static')
            .then( function(cache) {
                cache.addAll( cache_files );
            })
    );
});

self.addEventListener('activate', function() {
    console.log("SW Activated");
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then( function(res) {
                if(res) {
                    return res;
                } else {
                    return fetch(event.request);
                }

            })
    );
});