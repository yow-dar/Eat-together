$(document).ready( function() {
    auxiliaryCSS();
});

$(window).resize( function() {
    auxiliaryCSS();
});

function auxiliaryCSS() {
    // set x-center-aligned
    let x_center_aligned = $('.x-center-aligned').each( function() {
        let obj_width = parseInt( $(this).css('width') );
        let parent_width = parseInt($( $(this).parent() ).css('width'));
        $(this).css('transform', 'translateX(' + ( parent_width -  obj_width)/2 + 'px)');
    });
    // END set x-center-aligned

    // set y-center-aligned
    let y_center_aligned = $('.y-center-aligned').each( function() {
        let obj_height = parseInt( $(this).css('height') );
        let parent_height = parseInt($( $(this).parent() ).css('height'));
        $(this).css('transform', 'translateY(' + ( parent_height -  obj_height)/2 + 'px)');
    });
    // END set y-center-aligned
}