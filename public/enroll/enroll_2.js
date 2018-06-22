$(document).ready(function(){
  $('#enroll_1').click(function(e){  
    e.preventDefault();

    $.post(
    '/enroll_1',
    {
      account:_account,
    }
    ,
    function(data){
     $('#center_frame').html(data);
     $('#frame_js').attr("src","enroll_2.js")
    }
    );
  });


});
