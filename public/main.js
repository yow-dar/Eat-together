$(document).ready(function(){

  $("#meal button").click(function(e){
    e.preventDefault();
/*
    $.ajax({
      method:"post",
      url:"./ajax_post_data",
      data:{
        fname: $("#ajax_post>input[name='fname']").val(),
        lname: $("#ajax_post>input[name='lname']").val()
      },
      success:function(data){
        $("#ajax_post>h1").text(data);
      }
    });
    */
    $.post(
    "/ajax_post_data",
    {
        meal: $("#meal>select[name='meal']").val(),
    },
    function(data){
        $("#meal>h1").text(data);
    }
    );
    //setTimeout($("#ajax_post>h1").html("loading"),0);
  });
});
