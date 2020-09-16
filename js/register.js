$('.input_user input').on("click",function () {
    if(this.value =='请输入邮箱'){
        this.value = '';
    }
});
$('.input_user_one input').on("blur",function () {
    if(this.value == ''){
        this.value = '请输入邮箱';
    }
});
$('.input_password input').on("click",function () {
    if(this.value == '请输入密码'){
        this.value = '';
    }
});
$('.input_password input').on("blur",function () {
    if(this.value == ''){
        this.value = '请输入密码';
    }
});
$('.input_password_two input').on("click",function () {
    if(this.value == '请再次输入密码'){
        this.value = '';
    }
});
$('.input_password_two input').on("blur",function () {
    if(this.value == ''){
        this.value = '请再次输入密码';
    }
});

var inputChecked = $('.re_main_regist_bot input');
var re_btn = $('.re_regist');
console.log(inputChecked.is(':checked'));
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





















