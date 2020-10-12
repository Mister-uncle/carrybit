startTime();
function startTime() {
    let date = new Date();
    let y = date.getFullYear();
    let M = date.getMonth()+1;
    let d = date.getDate();
    let w = date.getDay();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let week = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];

    t = setTimeout(startTime, 1000)
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    // console.log(y+"年"+M+"月"+d+"日"+" "+h+":"+m+":"+s+" "+week[w]);
    $(".content_rightIndexTitle em").html(y+"年 "+M+"月 "+d+"日 "+" "+h+" : "+m+" : "+s+" "+week[w]);
    function checkTime(i) {
        if(i<10){
            i="0"+i;
        }
        return i
    }
}
$(function () {
    //首页数据获取


})
































