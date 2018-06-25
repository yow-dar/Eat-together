// what the page should the current page go back to
var back_page = {
    'ChatRoom' : 'ChatRoomList',
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

    // the iframe page send signal to request fullscreen when iframe page is loaded
    // when the iframe.src is changed (i.e. leave iframe page), 
    // the iframe page will send signal to request "leave fullscreen" automatically
    /*
    if( e.data.message_name == 'FullScreenControl' ) {
        console.log( 'received fullscreen request' , e.data.fullscreen);
        $('#content_current').removeClass('content');
        $('#content_current').removeClass('content_fullscreen');
        $('#content_current').removeClass('content_topfullscreen');
        $('#content_current').removeClass('content_bottomfullscreen');
        if(e.data.fullscreen == 0) { // fullscreen
            $('#content_current').addClass('content');
        } else if(e.data.fullscreen == 1) {
            $('#content_current').addClass('content_fullscreen');
        } else if(e.data.fullscreen == 2) {
            $('#content_current').addClass('content_topfullscreen');
        } else if(e.data.fullscreen == 3) {
            $('#content_current').addClass('content_bottomfullscreen');
        }
    }
    */

    if( e.data.message_name == 'Home_SetPairing' ) {
        console.log( 'received Home_SetPairing' );
        redirectPage( 'PairingSettings' );
    }

    else if( e.data.message_name == 'PairingSettings_StartPairing' ) {
        console.log( 'received PairingSettings_StartPairing' );
        redirectPage( 'PairingWaiting' );
    }

    else if( e.data.message_name == 'PairingWaiting_Cancel' ) {
        console.log( 'received PairingWaiting_Cancel' );
        redirectPage( 'PairingSettings' );
    }
    else if( e.data.message_name == 'PairingWaiting_Succeeded' ) {
        console.log( 'received PairingWaiting_Succeeded' );
        redirectPage( 'ChatRoom' );
    }

    else if( e.data.message_name == 'ChatRoomList_EnterChatRoom' ) {
        console.log( 'received ChatRoomList_EnterChatRoom , id=' + e.data.ChatRoomId );
        redirectPage( 'ChatRoom' );
        // ajax or socket.io here
    }

    else if( e.data.message_name == 'ChatRoom_EnterPKGame' ) {
        console.log( 'received ChatRoom_EnterPKGame');
        redirectPage( 'PKGame' );
    }

    else if( e.data.message_name == 'PKGame_Replay' ) {
        console.log( 'received PKGame_Replay, opponent=' + e.data.opponent);
        redirectPage( 'PKGame', 1 );
    }

    else if( e.data.message_name == 'PKGame_EnterChatRoom' ) {
        console.log( 'received PKGame_Replay, chatroom_id=' + e.data.chatroom_id);
        redirectPage( 'ChatRoom' );
    }
}

function redirectPage(page, refresh=0) {
    if( refresh == 0 && page == current_loaded_page )
        return;
    current_loaded_page = page;
    $('#iframe_pageinfo').remove();
    let newscript = document.createElement('script');
    newscript.id = 'iframe_pageinfo';
    newscript.src = './inside_frame/' + page + '/pageinfo.js';
    document.head.appendChild(newscript);
    $('#content_loaded').attr('src', './inside_frame/' + page + '/' + page + '.html');
}