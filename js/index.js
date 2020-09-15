$(".searchinput").click(function () {
    this.value='';
    $("input").css("border","2px solid #fd6633")
})
$(".searchinput").blur(function () {
    this.value='体检预约';
    $("input").css("border","2px solid #ececed")
})