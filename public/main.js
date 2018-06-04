$(document).ready(function(){

  $("#signin").click(function(e){
    e.preventDefault();
      window.location.replace("/");
      //window.location="/";
   /* 
    $.post(
    "/signin",
    {
        _account: $("input[name='account']").val(),
        _password: $("input[name='password']").val(),
    },
    function(data){
      if(data)
      window.location.replace("/");
    }
    );
    */
  });
  
  $("#enroll").click(function(e){
    console.log("enroll");
    $.post(
    '/into_enroll',
    function(data){
    console.log("post");
      //$("#center_frame").html(data);
      window.location.replace("/enroll_1.html");
      //$('#frame_js').remove();
      //$('body').append("<script id='frame_js' src='enroll/enroll_1.js'></script>");
    }
    );
  });
    


  function signOut(){
    var auth2=gapi.auth2.getAuthInstance();
    auth2.signOut(function(){
    console.log("User sign out");
    });
  }    
////////////////other
////////////////enroll_1
  $('#enroll_1_next').click(function(e){  
    e.preventDefault();
    let _account = $("input[name='account_set']").val();
    let _password = $("input[name='password_set']").val();
    if(_password == $("input[name='password_confirm']").val()){    
      $.post(
      '/into_enroll_2',
      {
         _account: _account,
         _password:_password,
      }
      ,
      function(data){
        window.location.replace("/enroll_2.html");
       //$('#center_frame').html(data);
       //$('#frame_js').attr("src","enroll_2.js")
      }
      );
    }
  });

  ////////////////enroll_2
  $('#enroll_2_next').click(function(e){  
    e.preventDefault();
    
    $.post(
    '/enroll_end',
    function(data){
      window.location.replace("/");
     //$('#center_frame').html(data);
     //$('#frame_js').attr("src","enroll_2.js")
    }
    );
  });
////////////////other
});

  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
        
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
        
    $.post(
      "/tokensignin",
      {
      idtoken:id_token
      },
      function(){
      //window.location.replace("/");
      }
      );        
  };
