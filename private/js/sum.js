//手机尺寸适配
(function(designWidth, maxWidth) {
    var doc = document,
        win = window,
        docEl = doc.documentElement,
        remStyle = document.createElement("style"),
        tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        maxWidth = maxWidth || 540;
        width>maxWidth && (width=maxWidth);
        var rem = width * 100 / designWidth;
        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
    }

    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
    //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
    refreshRem();

    win.addEventListener("resize", function() {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
    } else {
        doc.addEventListener("DOMContentLoaded", function(e) {
            doc.body.style.fontSize = "16px";
        }, false);
    }
})(750, 750);

$(function() {
    $(".btn").click(function(){
        $(".model_black").toggle();
        $(".model_box").toggle();
        if($(".model_box").css("display") == "block"){
            $(".btn>i").addClass("icon-shangyi").removeClass("icon-shangyi-copy");
            $("body").css("overflow","hidden");
        }else{
            $(".btn>i").addClass("icon-shangyi-copy").removeClass("icon-shangyi");
            $("body").css("overflow","auto");
        }
    });
//    重置按钮
    $(".reset").click(function(){
       if($(".inp_checkbox").is(':checked')){
           $(".inp_checkbox").prop("checked",false);
       }
    });
//  提交按钮
    $(".complete").click(function(){
        $(".model_black").hide();
        $(".model_box").hide();
        $("body").css("overflow","auto");
        $(".btn>i").addClass("icon-shangyi-copy").removeClass("icon-shangyi");
        $(".inp_checkbox").each(function () {
            if($(this).is(':checked')){
                var arr = $(this).val();
                console.log(arr);
            }
        });

    });


});







