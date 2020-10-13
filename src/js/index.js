
$(function () {
    $(".searchinput").click(function () {
        this.value='';
        $("input").css("border","2px solid #fd6633")
    })
    $(".searchinput").blur(function () {
        this.value='体检预约';
        $("input").css("border","2px solid #ececed")
    })


    let topsroll = $("#topsroll");
    $(window).scroll(function () {
        if($(document).scrollTop() >= 160){
            topsroll.fadeIn();
        }else {
            $("#topsroll").hide();
        }
    });
    topsroll.on("click",function () {
        $("html,body").animate({ scrollTop:0+"px"},1000,'easeOutQuart');
    });

    let abiliAnima = $(".abiliAnima");
    let titlea = $("#abliAnimate li.abliAnimateli a");
    titlea.mouseover(function () {
        let index = $(this).parents("li").index();
        console.log(index)

        abiliAnima.show();
        let widtha = $(this).css('width');
        abiliAnima.css({
            width:widtha
        });
        if(index <= 2){
            let left = index*82;
            abiliAnima.stop().animate({
                left:left+"px"
            },500,'easeOutQuart');

        }else {
            let left = 2*82+(index-2)*114;
            abiliAnima.stop().animate({
                left:left+"px"
            },500,'easeOutQuart');
        }
    });
    titlea.mouseleave(function () {
        abiliAnima.hide();
    })


    let topAnima = $(".m_con_topAnima");
    let topa = $(".m_con_top .r a");
    topa.mouseover(function () {
        let index = $(this).index();
        // console.log(index)
        topAnima.show();

        let left =index*72+20;
        topAnima.stop().animate({
                left:left+"px"
        },500,'easeOutQuart');


    });
    topa.mouseleave(function () {
        topAnima.stop().animate({
            left:20 + "px"
        },500,'easeOutQuart');
    })

})






























