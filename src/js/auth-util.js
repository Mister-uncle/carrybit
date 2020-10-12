function setAuth(request) {
    let authToken = request.getResponseHeader("Authorization");
    setCookie("authToken",authToken);
}

function getAuth() {
    return getCookie("authToken");
}

function setCookie(key,value) {
    let Days = Infinity;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = key + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(key) {
    let arr,reg=new RegExp("(^| )"+key+"=([^;]*)(;|$)");

    if(arr === document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

function delCookie(key)
{
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval=getCookie(key);
    if(cval!=null)
        document.cookie= key + "="+cval+";expires="+exp.toGMTString();
}