$(function () {
    let lis = $(".content_sideShop li");
    let li = $(".togleDesk");
    //左侧栏点击后切换li状态和内容区的显示li
    lis.on("click",function () {
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
        var index = $(this).index();
        li.eq(index).removeClass("deskActive");
        li.eq(index).siblings().addClass("deskActive");
    })
    //顶部导航切换效果，以及左侧显示内容
    let topli = $(".topCenter li");
    let side = $(".content_side ul");
    topli.on("click",function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index();
        side.eq(index).show();
        side.eq(index).siblings().hide();
    })

    let conli = $(".content_sideSystem li");
    let condiv = $(".content_side");

    condiv.on("click",".content_sideSystem li",function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index()+3;
        console.log(index)
        li.eq(index).removeClass("deskActive");
        li.eq(index).siblings().addClass("deskActive");
    })

})















































