$(function () {
    let lis = $(".content_sideShop li");
    let li = $(".togleDesk");
    //商品左侧栏点击后切换li状态和内容区的显示li
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

    let condiv = $(".content_side");
    //系统左侧栏点击后切换li状态和内容区的显示li
    condiv.on("click",".content_sideSystem li",function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index()+3;
        li.eq(index).removeClass("deskActive");
        li.eq(index).siblings().addClass("deskActive");
    })

    //顶部标签功能
    let contentSideLis = $(".content_side li");
    let contentTopUl = $(".content_rightTop ul");

    contentSideLis.on("click",function () {
        let index = $(this).attr("data-index")
        let topul = $(".content_rightTop ul li");
        let flag = false;

        topul.each(function () {
            let topulindex = $(this).attr("data-index");
            if(topulindex === index){
                $(this).addClass("topActive");
                $(this).siblings().removeClass("topActive");
                flag = true;
            }
        });
        if(flag){
            $(this).addClass("current");
            $(this).siblings().removeClass("current");
            return false;
        }
        contentTopUl.append("<li><a href=\"javascript:\"></a><span class=\"glyphicon glyphicon-remove\"></span></li>");
        let lastChild = $(".content_rightTop li:last-child");
        lastChild.attr("data-index",$(this).attr("data-index"));
        $(".content_rightTop li:last-child a").html($(this).text());

        $(".content_rightTop li").on("click",function () {
            $(this).addClass("topActive");
            $(this).siblings().removeClass("topActive");
            let index =  $(this).attr("data-index");
            li.eq(index).removeClass("deskActive");
            li.eq(index).siblings().addClass("deskActive");

            contentSideLis.each(function () {
                if(index === $(this).attr("data-index")){
                    $(this).addClass("current");
                    $(this).siblings().removeClass("current");
                    return false;
                }
            })
        });
        lastChild.click();


    });






    //添加窗口关闭效果
    let remove = $(".remove");
    let shadeCon = $(".shade_content");
    let shade = $(".shade");
    let add = $(".add");
    add.on("click",function () {
        shade.fadeIn();
    })
    //窗口关闭效果
    remove.on("click",function () {
        shadeCon.fadeOut();
        shadeCon.siblings(".shade").fadeOut();
    });
    //点击阴影，窗口关闭
    shade.on("click",function () {
        shadeCon.fadeOut();
        shadeCon.siblings(".shade").fadeOut();
    })
    //添加商品窗口
    let addGoods = $(".add_goods");
    addGoods.on("click",function () {
        shadeCon.fadeIn();
    })
    //订单添加窗口
    let addOrder = $(".add_order");
    let shadeOrder = $(".shade_contentOrder");
    addOrder.on("click",function () {
        shadeOrder.fadeIn();
    })
    //管理员添加窗口
    let addAdmin = $(".addAdmin");
    let shadeAdmin = $(".shade_contentAdmin");
    addAdmin.on("click",function () {
        shadeAdmin.fadeIn();
    })
    //用户添加窗口
    let addUser = $(".addUser");
    let shadeUser = $(".shade_contentUser");
    addUser.on("click",function () {
        shadeUser.fadeIn();
    })
    //文章添加窗口
    let addArticle = $(".addArticle");
    let shadeArticle = $(".shade_contentArticle");
    addArticle.on("click",function () {
        shadeArticle.fadeIn();
    })
})















































