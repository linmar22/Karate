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

        var text1 = "Exercise. We encourage young people and elder ones to exercise more. Our teachers at Dyssengard Karate Club will make sure you stay fit!";
        var text2 = "Non-violent. We don't propagate violence within this martial art, as might be mistaken when they hear about Karate, or watch Jackie Chan movies. With us - everyone can feel safe";
        var text3 = "Concentration. Karate requires you to really focus your mind. This way you learn to feel what is around you and maintain ability to a quick response, beneficial in danger situations. ";
        var text4 = "Health. Staying active and becoming strong really helps you to live a healthier life.";
        var text5 = "Fun. Of course, despite the other things, Karate is super fun to know and try. Once you're a member of a club, you're a part of the family.";
        var text6 = "Stamina. Karate is challenging, but never give up and you will see how your stamina will increase. If you believe in yourself, You'll become not only physically, but also spiritually unbreakable.";


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

