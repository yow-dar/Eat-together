$(window).on('load', function() {
    auxiliaryCSS();
});

$(window).resize( function() {
    auxiliaryCSS();
});

function auxiliaryCSS() {
    // set x-center-aligned
    let x_center_aligned = $('.x-center-aligned').each( function() {
        let obj_width = $(this).width();
        let parent_width = $( $(this).parent() ).width();
        $(this).css('transform', 'translateX(' + ( parent_width -  obj_width)/2 + 'px)');
    });
    // END set x-center-aligned

    // set y-center-aligned
    let y_center_aligned = $('.y-center-aligned').each( function() {
        let obj_height = $(this).height();
        let parent_height = $( $(this).parent() ).height();
        $(this).css('transform', 'translateY(' + ( parent_height -  obj_height)/2 + 'px)');
    });
    // END set y-center-aligned
}