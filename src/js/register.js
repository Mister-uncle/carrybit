$(function () {
    var inputChecked = $('.re_main_regist_bot input');
    var re_btn = $('.re_regist');
    let passwordone = $(".password_tag_one");


    // console.log(inputChecked.is(':checked'));
    if(inputChecked.is(":checked")){
        re_btn.addClass('re_regist_c');
    }

    inputChecked.on("click",function () {
        if(inputChecked.is(":checked")){
            re_btn.addClass('re_regist_c');
            re_btn.attr('disabled',false)
        }else {
            re_btn.removeClass('re_regist_c');
            re_btn.attr('disabled',true)

        }
    })


    let eamiltag = $(".input_userEmail_tag");
    $("#eamil").on("input",function (email) {
        let that = $(this);
        let eamil = that.val();
        let $reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        let eamiltag = $(".input_userEmail_tag");



        if(eamil.trim().length !== 0){
              if(!$reg.test(eamil)){
                   $(".input_userEmail_tag").css("display","inline-block")
              }else {
                   $(".input_userEmail_tag").css("display","none")
               return 1;
            }
        }else {
            eamiltag.css("display","inline-block")
            eamiltag.html("邮箱不能为空！")
        }


    });

    let eamilcheck = function(email){
        let $reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

                if(email.trim().length === 0){
                    eamiltag.css("display","inline-block")
                    eamiltag.html("邮箱不能为空！")

                }else {
                    if(!$reg.test(email)){
                        $(".input_userEmail_tag").css("display","inline-block")
                        eamiltag.html("邮箱格式不正确！")
                    }else {
                        $(".input_userEmail_tag").css("display","none")
                        return true;
                    }
                }


    }

    // $("#phone").on("input",function () {
    //     let that = $(this);
    //     let phone = that.val();
    //     let $reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    //
    //     if(!timeout){
    //         timeout = setTimeout(function () {
    //             timeout = null;
    //             if(phone.trim().length !== 0){
    //                 if(!$reg.test(phone)){
    //                     $(".input_phone_tag").css("display","inline-block")
    //                 }else {
    //                     $(".input_phone_tag").css("display","none")
    //                 }
    //             }else {
    //                 let inputphone = $(".input_phone_tag");
    //                 inputphone.css("display","inline-block")
    //                 inputphone.html("手机号不能为空")
    //             }
    //             console.log(that.val())
    //         },100)
    //     }
    // });

    $("#password").on("input",function () {
        let password = $(this).val();
        let $reg=/^[a-zA-Z]\w{5,17}$/;
        let repassword = $("#passwordt").val();
        if(repassword.trim().length !== 0){
            if(repassword !== $("#password").val()){
                $(".password_tag").css("display","inline-block")
            }else {
                $(".password_tag").css("display","none")
            }
        }
         if(password.trim().length !== 0){
                if(!$reg.test(password)){
                passwordone.css("display","inline-block")
                 }else {
                 passwordone.css("display","none")
                 }
         }else {
                 passwordone.css("display","inline-block")
                 passwordone.html("密码不能为空！")
                }
    });

    $("#passwordt").on("input",function () {
        let repassword = $(this).val();


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
    });
    let passwordcheck = function(p){
        let $reg=/^[a-zA-Z]\w{5,17}$/;
        if(p.trim().length === 0){
            let inputpassword = $(".password_tag_one");
            inputpassword.css("display","inline-block");
            inputpassword.html("密码不能为空！");
        }else if(!$reg.test(p)){
            passwordone.css("display","inline-block")
            passwordone.text('密码格式不正确')
            }else {
            $(".password_tag_one").css("display","none")
            return true;
        }
     }

    let passwordCheckAgin = function(p){
        if(passwordcheck(p)){
            if(p !== $("#password").val()){
                $(".password_tag").css("display","inline-block")
            }else {
                return true;
            }
        }else {
            $(".password_tag").css("display","inline-block")
            $(".password_tag").text('密码不能为空')
        }
    }


    let checked = $(".input_user .checked");
    let eamil = $("#eamil").val();

    let inchecked;
    checked.click(function () {
        let email = $(this).siblings('input').val();

        if(eamilcheck(email)){
            let count = 60;
            inchecked = $(".input_user .checked");
            let countDown = setInterval(function () {
                if(count <= 0){
                    inchecked.text('重新获取').removeAttr('disabled');
                    inchecked.css({
                        backgroundColor: '#fd6633',
                        cursor: 'pointer'
                    });
                    clearInterval(countDown);
                } else {
                    inchecked.attr('disabled',true);
                    inchecked.css({
                        backgroundColor: '#7e7e80',
                        color: '#f3f1f1',
                        cursor: 'default'
                    });
                    inchecked.text(count+'s后可重新获取');
                }

                count --;
            },1000)
        }else {
            eamiltag.css("display","inline-block")
            eamiltag.html("邮箱不能为空")
        }

    });

    checked.click(function () {
        if(eamilcheck(eamil)){
            $.ajax({
                type: 'get',
                url: 'http://172.27.51.75:81/a/redis?email='+eamil,
                success: function (response) {
                    console.log(response)
                }
            })
        }
    })
    re_btn.click(function () {

        let password = $("#password").val();
        let passwordAgin = $("#passwordt").val();
        let eamil = $("#eamil").val();

        let checkedVal = $("#checked").val();
        passwordcheck(password);
        passwordCheckAgin(passwordAgin);
        eamilcheck(eamil);
        if(passwordcheck(password) && passwordCheckAgin(passwordAgin) && eamilcheck(eamil)){
        }
        return false

    })
})



















