function adjustControls() {
    for(i in control_settings) {
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
        }
    }
}