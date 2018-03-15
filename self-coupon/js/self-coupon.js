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
    //选择店
    $('.choose').click(function(){
        $('.model_box').toggle();
        $('.model_black').toggle();
        if(!$('.model_box').is(':hidden')){
            // $('body').css('overflow','hidden');
            $('body,html').css('overflow','hidden');
        }else{
            // $('body').css('overflow','auto');
            $('body,html').css('overflow','auto');
        }
    })
    // 取消
    $('.reset').click(function(){
        $(".inp_checkbox").prop('checked',false);
        $('.model_box').hide();
        $('.model_black').hide();
        $('body,html').css('overflow','auto');
    })
    //确定
    $('.complete').click(function(){
        var arr = [];
        $('.model_box').hide();
        $('.model_black').hide();
        $('body,html').css('overflow','auto');
        $(".inp_checkbox").each(function () {
            if($(this).is(':checked')){
                arr.push($(this).val())
                
            }
        });
        console.log(arr);
        
    })
  
});







