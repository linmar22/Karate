/**
 * Created by linas on 5/26/15.
 */
$(document).ready(function () {

    $(".link").click(function () {
        window.location.href = "http://www.google.com";
    });

    $("#content_center_wrapper").hover(
        function(){
            $("#enter").css({opacity: 0});
            $("#enter").removeClass("intro");
        },function(){
            $("#enter").css({opacity: 1});
        }
    );

});