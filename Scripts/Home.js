/**
 * Created by x.debeselis on 2015-05-10.
 */
$(document).ready(function (e) {
    $("#close_x").click(function () {
        $("#info_table").css({display: "none"});
    });

    $("#Map7").click(function () {
        $("#info_table").css({display: "none"});
    });

    $(".maps").click(function () {
        var id = $(this).attr("id");
        var str = "";
        var attr = $("#info_table").css("display");

        var text1 = "Exercise";
        var text2 = "Non-violent";
        var text3 = "Concentration";
        var text4 = "Health";
        var text5 = "Fun";
        var text6 = "Stamina";


        if(attr==="none"){
            $("#info_table").css({display: "inline-block"});
        }

        switch(id){
            case "Map":
                str = $("#h1_1").text();
                $("#table_heading").html(str);
                $("#table_paragraph").html(text1);
                break;
            case "Map2":
                str = $("#h1_2").text();
                $("#table_heading").html(str);
                $("#table_paragraph").html(text2);
                break;
            case "Map3":
                str = $("#h1_3").text();
                $("#table_heading").html(str);
                $("#table_paragraph").html(text3);
                break;
            case "Map4":
                str = $("#h1_4").text();
                $("#table_heading").html(str);
                $("#table_paragraph").html(text4);
                break;
            case "Map5":
                str = $("#h1_5").text();
                $("#table_heading").html(str);
                $("#table_paragraph").html(text5);
                break;
            case "Map6":
                str = $("#h1_6").text();
                $("#table_heading").html(str);
                $("#table_paragraph").html(text6);
                break;

        }
    });
});

