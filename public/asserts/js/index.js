$(function () {
    let lis = $(".content_sideShop li");
    let li = $(".togleDesk");

    lis.on("click",function () {
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
        var index = $(this).index();
        li.eq(index).removeClass("deskActive");
        li.eq(index).siblings().addClass("deskActive");
    })

    let topli = $(".topCenter li");
    let side = $(".content_side ul");
    topli.on("click",function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index();
        console.log(typeof (index))
        side.eq(index).show();
        side.eq(index).siblings().hide();
    })

})















































