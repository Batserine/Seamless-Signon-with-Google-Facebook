function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".data-1").css("display","none");
    $(".data-2").css("display","block");
    $(".data-3").css("display","none");
    $(".data-4").css("display","none");
    $(".data-8").css("display","none");
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("User signed out.");
        $(".data-1").css("display","block");
        $(".data-2").css("display","none");
        $(".g-signin2").css("display","block");
        $(".data-3").css("display","block");
        $(".data-4").css("display","block");
        $(".data-8").css("display","block");
        $(".data").css("display","none");
    });
}

// login with facebook with extra permissions
function fblogin() {
    FB.login(function(response) {
        $(".data-1").css("display","none");
        $(".data-2").css("display","block");
        $(".data-3").css("display","none");
        $(".data-4").css("display","none");
        $(".data-5").css("display","block");
        $(".data-8").css("display","none");
        $(".g-signin2").css("display","none");
        }, {scope: 'publish_actions'} , {scope: 'name'}
    );
}

// getting basic user info
function getInfo() {
    FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(100).height(100)'}, function(response) {
        document.getElementById('demo').innerHTML = '<img src="'+response.picture.data.url+'">' +response.name ;
        $(".data").css("display","none");
        $(".data-1").css("display","none");
        $(".data-2").css("display","block");
        $(".g-signin2").css("display","none");
        $(".data-3").css("display","none");
        $(".data-4").css("display","none");
        $(".data-5").css("display","block");
        $(".data-6").css("display","block");
        $(".data-8").css("display","none");
    });
}

//logging out from facebook
function logOut() {
    FB.logout(function (response) {
        alert("User logged out");
        $(".data-1").css("display","block");
        $(".data-2").css("display","none");
        $(".g-signin2").css("display","block");
        $(".data-3").css("display","block");
        $(".data-4").css("display","block");
        $(".data-5").css("display","none");
        $(".data-6").css("display","none");
        $(".data-8").css("display","block");
        $(".data").css("display","none");
        // user is now logged out
    });
}