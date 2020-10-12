$(function () {

    $(".de_intro_comTitle_bot button").on("click",function () {
        // $(".de_intro_comTitle_bot").hide();
        $(".de_intro_comTitlePro").show().animate({
            left:0
        },600,'easeOutQuart');

        let price = $(this).siblings("h5").html();
        let info = $(this).siblings("h4").html();
        $(".de_intro_comTitlePro .buy h2").html(price);
        $(".de_intro_comTitleProTop h2").html(info);

    })
    $(".de_intro_comTitlePro .back").on("click",function () {
        $(".de_intro_comTitlePro").animate({left:'1150px'},600,function () {
            $(".de_intro_comTitlePro").css("display","none");
        });
    })
    $(".but1").on("click",function () {
        $("html,body").animate({ scrollTop:1500+'px'},1000,'easeOutQuart');
        $("#btn1").click();
    });
    $(".but2").on("click",function () {
        $("html,body").animate({ scrollTop:1500+'px'},1000,'easeOutQuart');
        $("#btn2").click();
    });
    $(".but3").on("click",function () {
        $("html,body").animate({ scrollTop:1500+'px'},1000,'easeOutQuart');
        $("#btn3").click();

    })

})