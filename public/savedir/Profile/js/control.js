// what the page should the current page go back to
var back_page = {
    'Favorite' : 'Home',
    'Comment' : 'Home'
}

function back_btn_clicked() {
    redirectPage( back_page[current_loaded_page] );
}

$(document).ready(function() {
    window.addEventListener('message', forwardMessage);
    adjustControls();
})

// Forward receive postMessage to corresponding handler function
function forwardMessage(e) {
    if( e.data.message_name == 'Profile_Home_EnterComment' ) {
        console.log( 'received Profile_Home_EnterComment' );
        redirectPage( 'Comment' );
    }
    else if( e.data.message_name == 'Profile_Home_EnterFavorite' ) {
        console.log( 'received Profile_Home_EnterFavorite' );
        redirectPage( 'Favorite' );
    }
}

function redirectPage(page) {
    if( page == current_loaded_page )
        return;
    current_loaded_page = page;
    $('#content_loaded').attr('src', './inside_frame/' + page + '/' + page + '.html');
    $('#iframe_pageinfo').remove();
    let newscript = document.createElement('script');
    newscript.id = 'iframe_pageinfo';
    newscript.src = './inside_frame/' + page + '/pageinfo.js';
    document.head.appendChild(newscript);
}