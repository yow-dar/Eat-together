
// when iframe change to another page, this function show be run to show/hide controls
var sw_table = {
    // back, more, favorite, share, search, comment, showfooter
    'Explore': [0, 0, 0, 0, 1, 1, 1],
    'GoogleMaps': [1, 0, 0, 0, 0, 0, 0],
    'MeetingInfo': [1, 0, 1, 1, 0, 0, 0],
    'ChatRoom': [1, 1, 0, 0, 0, 0, 0]
};
function adjustUIControl() {
    let sw = sw_table[ current_loaded_page ];
    console.log(current_loaded_page, sw);
    if( sw[0] == 1)
        $('#back_btn').show();
    else
        $('#back_btn').hide();
    if( sw[1] == 1)
        $('#more_btn').show();
    else
        $('#more_btn').hide();
    if( sw[2] == 1)
        $('#favorite_btn').show();
    else
        $('#favorite_btn').hide();
    if( sw[3] == 1)
        $('#share_btn').show();
    else
        $('#share_btn').hide();
    if( sw[4] == 1)
        $('#search_btn').show();
    else
        $('#search_btn').hide();
    if( sw[5] == 1)
        $('#commment_btn').show();
    else
        $('#comment_btn').hide();
    if( sw[6] == 1) {
        $('#content_current').css('height', (screen.height - 54 - 54)+'px');
        $('#footer').show();
    }
    else {
        $('#content_current').css('height', (screen.height - 54)+'px');
        $('#footer').hide();
    }
}

$(document).ready(function() {
    window.addEventListener('message', messageForward);
})

// Forward receive postMessage to corresponding handler function
function messageForward(e) {

    if( e.data.message_name == 'GoogleMapsSelectedPosition' ) {
        delete e.data.message_name;
        receivedGoogleMapsSelectedPosition( e.data )
    }

    if( e.data.message_name == 'JoinMeeting' ) {
        delete e.data.message_name;
        receivedJoinMeeting( e.data );
    }

    if( e.data.message_name == 'SelectMeeting' ) {
        delete e.data.message_name;
        receivedSelectMeeting( e.data );
    }
}

function receivedGoogleMapsSelectedPosition(place) {
    console.log(place);
}

function receivedJoinMeeting(meeting_info) {
    console.log( meeting_info );
    redirectPage('ChatRoom');
}

function receivedSelectMeeting(meeting_info) {
    console.log(meeting_info);
    redirectPage('MeetingInfo');
}

function redirectPage(page) {
    current_loaded_page = page;
    $('#content_loaded').attr('src', './inside_frame/' + page + '/' + page + '.html');
    console.log(page);
    adjustUIControl();
}

function back_btn_clicked() {
    if( current_loaded_page == 'MeetingInfo' ) {
        redirectPage('Explore');
    }
    else if( current_loaded_page == 'ChatRoom' ) {
        redirectPage('MeetingInfo');
    }
}