window.fbAsyncInit = function() {
    //Inicialize API
  FB.init({
    appId            : '219019498653734',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.12'
  });
    //Open a share windows
  FB.ui({
     method: 'share',
     href: 'https://developers.facebook.com/docs/'
   }, function(response){});
    //return the publicacion ID, I hope
   FB.api(
    "/{post-id}",
    function (response) {
      if (response && !response.error) {
        id
      }
    }
);
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));