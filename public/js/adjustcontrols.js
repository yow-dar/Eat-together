function adjustControls() {
    for(i in control_settings) {
        if( i == 'title' ) {
            $('#header_title').text(control_settings[i]);
            continue;
        } else if( i == 'fullscreen' ) {
            $('#content_current').removeClass('content');
            $('#content_current').removeClass('content_fullscreen');
            $('#content_current').removeClass('content_topfullscreen');
            $('#content_current').removeClass('content_bottomfullscreen');
            if(control_settings.fullscreen == 0) { // fullscreen
                $('#content_current').addClass('content');
            } else if(control_settings.fullscreen == 1) {
                $('#content_current').addClass('content_fullscreen');
            } else if(control_settings.fullscreen == 2) {
                $('#content_current').addClass('content_topfullscreen');
            } else if(control_settings.fullscreen == 3) {
                $('#content_current').addClass('content_bottomfullscreen');
            }
            continue;
        }
        if( control_settings[i].show )
            $(i).show();
        else
            $(i).hide();
        for(j in control_settings[i].controls) {
            if( typeof control_settings[i].controls[j].show != 'undefined' )
                if( control_settings[i].controls[j].show )
                    $(j).show();
                else
                    $(j).hide();
            if( typeof control_settings[i].controls[j].imgsrc != 'undefined' )
                $(j).attr('src', control_settings[i].controls[j].imgsrc);
        }
    }
}