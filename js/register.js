
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





















