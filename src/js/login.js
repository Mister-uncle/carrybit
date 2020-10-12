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
    var uid=$('#uid').val();
    var password=$('#password').val();

    if(uid.trim().length==0){
        alert('请输入邮箱！');
        return;
    }
    if(password.trim().length == 0){
        alert('请输入密码！');
        return;
    }

    $.ajax({
        type: 'post',
        url: 'http://172.27.51.75/api/check',
        data: {
            uid:uid,
            password:password
        },
        dataType:"text",
        success: function (response) {
            alert("登录成功");
            location.href = '../index.html';
        },
        error: function () {
            alert('用户名或密码错误！');
        }
    })
});
