function prevScene() {
    $('#content_prev').css({
        'z-index': '-1001',
        'transform': 'translate3d(0, 0, 0)'
    });
    $('#content_current').toggleClass('slideright');
    setTimeout( function() {
        $('#content_prev').css({
            'z-index': '-1000'
        });
        $('#content_current').css({
            'z-index': '-1000',
            'transform': 'translate3d(100%, 0, 0)'
        });
    }, 300);
}