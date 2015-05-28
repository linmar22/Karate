/**
 * Created by x.debeselis on 2015-05-10.
 */
$(document).ready(function (e) {

    var attr = $("#info_table").css("visibility");
    var attr2 = $("#info_table2").css("visibility");

    $("#close_x").click(function () {
        $("#info_table").css({visibility: "hidden"});
    });

    $("#octa_logo").click(function () {
        attr = $("#info_table").css("visibility");
        attr2 = $("#info_table2").css("visibility");

        if (attr === "visible" || attr2 === "visible") {
            $("#info_table").css({visibility: "hidden"});
            $("#info_table2").css({visibility: "hidden"});
        }
        if(attr === "hidden" && attr2 === "hidden"){
            $("#info_table").css({visibility: "visible"});
            $("#info_table2").css({visibility: "visible"});
        }
    });


    $("#close_x2").click(function () {
        $("#info_table2").css({visibility: "hidden"});
    });

    $("#octa_prices").click(function () {
        attr = $("#info_table").css("visibility");
        if (attr === "hidden") {
            $("#info_table").css({visibility: "visible"});
        }else{
            $("#info_table").css({visibility: "hidden"});
        }

    });

    $("#octa_apply").click(function () {
        attr2 = $("#info_table2").css("visibility");
        if (attr2 === "hidden") {
            $("#info_table2").css({visibility: "visible"});
        }else{
            $("#info_table2").css({visibility: "hidden"});
        }
    });


});


