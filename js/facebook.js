window.fbAsyncInit = function() {
    //Inicialize API
  FB.init({
    appId            : '219019498653734',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.12'
  });
   FB.getLoginStatus(function(response) {
   statusChangeCallback(response);
   });
   
   FB.login(function(response) {
   });
    
    
};

//SDK startup point
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));