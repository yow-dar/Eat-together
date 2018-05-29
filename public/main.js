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
    }
    );
  });
  
  $("#enroll").click(function(e){
    e.preventDefault();
  });

  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
        
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    //console.log("ID Token: " + id_token);
        
    $.post(
      "/tokensignin",
      {
      idtoken:id_token
      },
      function(){}
      );        
  };

  function signOut(){
    var auth2=gapi.auth2.getAuthInstance();
    auth2.signOut(function(){
    console.log("User sign out");
    });
  }    
});
