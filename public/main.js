var user_id;
$(document).ready(function(){
  $("#signin").click(function(e){
    e.preventDefault();
    
    $.post(
    "/signin",
    {
        _account: $("input[name='account']").val(),
        _password: $("input[name='password']").val(),
    },
    function(data){
      console.log(data);
      if(data.result == "OK"){
      window.location.replace("/");
      user_id = data.inf;
      console.log(user_id);
      }
    }
    );
    
  });
  
  $("#enroll").click(function(e){
    console.log("enroll");
    $("#center_frame").load("./enroll/enroll_1.html");
    $("link").attr("href","");
  });
    


  function signOut(){
    var auth2=gapi.auth2.getAuthInstance();
    auth2.signOut(function(){
    console.log("User sign out");
    });
  }    
////////////////other
////////////////enroll_1
  $(document).on('click','#enroll_1_next',function(e){  
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
        console.log(data);
        if(data.result == "OK"){
          $("#center_frame").load("./enroll/enroll_2.html");
          user_id = data.inf;
          console.log("userid = " + user_id);
        }
      }
      );
    }
  });

  ////////////////enroll_2
  $(document).on('click','#enroll_2_next',function(e){  
    e.preventDefault();
    $.post(
    '/into_enroll_3',
    {
        user_id:user_id,
        _user_name: $("input[name='name']").val(),
        _birthday: $("input[name='birthday']").val(),
        _gender: $("input[name='gender']").val(),
        _address: $("input[name='address']").val(),
    },
    function(data){
      //window.location.replace("/");
      $("#center_frame").load("./enroll/enroll_3.html");
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
      function(data){
        if(data.result == "OK"){
          user_id = data.inf;
          console.log(user_id);
          window.location.replace("/");
        }
        else if(data.result == "google_enroll"){
          user_id = data.inf;
          $("#center_frame").load("./enroll/enroll_2.html");
          $("link").attr("href","");
        }
      }
      );        
  };
