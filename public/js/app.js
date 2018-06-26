if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then( function() {
            console.log('SW registered');
            /*
            if ('Notification' in window) {
                Notification.requestPermission(function (status) {
                    console.log('Notification permission status:', status);
                    displayNotification();
                });
            } else {

            }
            */
        });
} else {
    
}

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then( reg => {
            var options = {
                icon: './assets/images/android_048.png',
                body: '歡迎加入 Angular 社群',
                image: 'https://augt-forum-upload.s3-ap-southeast-1.amazonaws.com/original/1X/6b3cd55281b7bedea101dc36a6ef24034806390b.png'
            };
            reg.showNotification('Angular User Group Taiwan', options);
            console.log('displayNotification');
        });
    }
}