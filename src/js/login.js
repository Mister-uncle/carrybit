$('.login_app').click(function () {
    $(this).css("background", "url('../images/app.png')");
});
// $('#uid').click(function () {
//     this.value=''
// });
// $('#uid').on("blur",function () {
//     if(this.value.trim().length==0){
//         this.value='请输入邮箱';
//     }
// });
$('.login_but').on("click",function () {
    var accountKey=$('#uid').val();
    var password=$('#password').val();

    if(accountKey.trim().length === 0){
        alert('请输入邮箱！');
        return;
    }
    if(password.trim().length === 0){
        alert('请输入密码！');
        return;
    }
    if(accountKey.trim().length !== 0 && password.trim().length !== 0){
        $.ajax({
            type: 'post',
            url: 'http://172.27.51.75:81/api/auth/uid'+accountKey,
            data: {
                accountKey:accountKey
            },
            // dataType:"text",
            success: function (response) {
                // location.href = '../index.html';
                let value = response.value;
                let status = response.status;
                let message = response.message;
                if(status === 'OK'){
                    $.ajax({
                        type: 'post',
                        url: 'http://172.27.51.75:81/api/auth/login',
                        data: {
                            uid:accountKey,
                            password:password,
                            uuid:value
                        },
                        success:function (response) {
                            location.href = '../index.html'+accountKey;
                        }
                    })
                }else {
                    alert(message)
                }
            },
            error: function () {
                alert('用户名或密码错误！');
            }
        })
    }

});














