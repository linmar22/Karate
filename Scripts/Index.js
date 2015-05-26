/**
 * Created by linas on 5/26/15.
 */
$(document).ready(function () {

    var screenHeight = $(window).height();

    function changeWhite() {
        $("#header").animate({backgroundColor: '#FFFFFF'},1000);
        $("#footer").animate({backgroundColor: '#FFFFFF'},1000, function(){
            window.location.href = "http://www.google.com";
        });
    }


    $(".link").click(function () {
        $("#header").animate({height: screenHeight / 2},1000);
        $("#footer").animate({height: screenHeight / 2},1000, function(){
            changeWhite();
        });
    });

    $("#content_center_wrapper").hover(
        function () {
            $("#enter").css({opacity: 0});
            $("#enter").removeClass("intro");
        }, function () {
            $("#enter").css({opacity: 1});
        }
    );
});