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
    //选项卡
   $('.nav_box>div').click(function(){
    var i = $(this).index();
    $('.line').css({'transform':'translateX('+i*100+'%)','transition':'0.3s'});
    $('.content_box').hide().eq(i).show();
   })
   //点击显示使用规则
   $('.content_box').children('li').click(function(){
    var i = $(this).children('.detail');
    if(i.children('.title').is(':hidden')){
        i.children('.title').show();
        i.children('.send').hide();
        i.children('.envoy_C').show();
        i.children('.envoy').hide();
    }else{
        i.children('.title').hide();
        i.children('.send').show();
        i.children('.envoy_C').hide();
        i.children('.envoy').show();
    }
   })
   $('.envoy').click(function(event){
         event.stopPropagation();//阻止事件冒泡
         console.log(52);
   });
});







