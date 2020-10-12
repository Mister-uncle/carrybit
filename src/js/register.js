$(function () {
    var inputChecked = $('.re_main_regist_bot input');
    var re_btn = $('.re_regist');
    // console.log(inputChecked.is(':checked'));
    if(inputChecked.is(":checked")){
        re_btn.addClass('re_regist_c');
    }

    inputChecked.on("click",function () {
        if(inputChecked.is(":checked")){
            re_btn.addClass('re_regist_c');
        }else {
            re_btn.removeClass('re_regist_c');
        }
    })

    let timeout;
    $("#eamil").on("input",function () {
        let that = $(this);
        let eamil = that.val();
        let $reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(!timeout){
            timeout = setTimeout(function () {
                timeout = null;

                if(eamil.trim().length !== 0){
                    if(!$reg.test(eamil)){
                        $(".input_userEmail_tag").css("display","inline-block")

                    }else {
                        $(".input_userEmail_tag").css("display","none")
                    }
                }else {
                    $(".input_userEmail_tag").css("display","inline-block")
                    $(".input_userEmail_tag").html("邮箱不能为空")
                }
                console.log(that.val())
            },100)
        }

    });

    $("#phone").on("input",function () {
        let that = $(this);
        let phone = that.val();
        let $reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

        if(!timeout){
            timeout = setTimeout(function () {
                timeout = null;
                if(phone.trim().length !== 0){
                    if(!$reg.test(phone)){
                        $(".input_phone_tag").css("display","inline-block")
                    }else {
                        $(".input_phone_tag").css("display","none")
                    }
                }else {
                    let inputphone = $(".input_phone_tag");
                    inputphone.css("display","inline-block")
                    inputphone.html("手机号不能为空")
                }
                console.log(that.val())
            },100)
        }
    });

    $("#password").on("input",function () {
        let that = $(this);
        let password = that.val();
        let $reg=/^[a-zA-Z]\w{5,17}$/;
        let repassword = $("#passwordt").val();
        if(repassword.trim().length !== 0){
            if(repassword !== $("#password").val()){
                $(".password_tag").css("display","inline-block")
            }else {
                $(".password_tag").css("display","none")
            }
        }else if(!timeout){
                timeout = setTimeout(function () {
                    timeout = null;
                    if(password.trim().length !== 0){
                        if(!$reg.test(password)){
                            $(".password_tag_one").css("display","inline-block")
                        }else {
                            $(".password_tag_one").css("display","none")
                        }

                    }else {
                        let inputpassword = $(".password_tag_one");
                        inputpassword.css("display","inline-block")
                        inputpassword.html("密码不能为空！")
                    }
                    console.log(that.val())
                },100)
            }



    });

    $("#passwordt").on("input",function () {
        let that = $(this);
        let repassword = that.val();

        if(!timeout){
            timeout = setTimeout(function () {
                timeout = null;
                if(repassword.trim().length !== 0){
                    if(repassword !== $("#password").val()){
                        $(".password_tag").css("display","inline-block")
                    }else {
                        $(".password_tag").css("display","none")
                    }
                }else {
                    let inputrepassword = $(".password_tag");
                    inputrepassword.css("display","inline-block")
                    inputrepassword.html("请输入密码！")
                }
                console.log(that.val())
            },100)
        }
    });


})



















