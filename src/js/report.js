$(function () {
    let editinfo = $("#name").text();
    $("#name").on("click",function () {
        $(this).html("<input type=\"text\" />");
        let editinput = $("#name input");

        editinput.css({
            "width":"100%",
            "height":"50px"
        });
        editinput.val(editinfo);
        editinput.focus();

        editinput.blur(function () {
            $(".edit input").css({
                "border":"none",
                "text-align":"center"
            });
            editinfo = (editinput.val());
        })
    });

    let editphone = $("#phone").text();
    $("#phone").on("click",function () {
        $(this).html("<input type=\"text\" />");
        let editinput = $("#phone input");

        editinput.css({
            "width":"100%",
            "height":"50px"
        });
        editinput.val(editphone);
        editinput.focus();

        editinput.blur(function () {
            $(".edit input").css({
                "border":"none",
                "text-align":"center"
            });
            editphone = (editinput.val());
        })
    });

    let editUid = $("#Uid").text();
    $("#Uid").on("click",function () {
        $(this).html("<input type=\"text\" />");
        let editinput = $("#Uid input");

        editinput.css({
            "width":"100%",
            "height":"50px"
        });
        editinput.val(editUid);
        editinput.focus();

        editinput.blur(function () {
            $(".edit input").css({
                "border":"none",
                "text-align":"center"
            });
            editUid = (editinput.val());
        })
    });

    let editsex = $("#sex").text();
    $("#sex").on("click",function () {
        $(this).html("<input type=\"text\" />");
        let editinput = $("#sex input");

        editinput.css({
            "width":"100%",
            "height":"50px"
        });
        editinput.val(editsex);
        editinput.focus();

        editinput.blur(function () {
            $(".edit input").css({
                "border":"none",
                "text-align":"center"
            });
            editsex = (editinput.val());
        })
    });

    let editadress = $("#adress").text();
    $("#adress").on("click",function () {
        $(this).html("<input type=\"text\" />");
        let editinput = $("#adress input");

        editinput.css({
            "width":"100%",
            "height":"50px"
        });
        editinput.val(editadress);
        editinput.focus();
        editinput.blur(function () {
            $(".edit input").css({
                "border":"none",
                "text-align":"center"
            });
            editadress = (editinput.val());
        })
    });


})