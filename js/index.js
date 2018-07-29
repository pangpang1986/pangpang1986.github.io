/**
 * Created by pp on 2018/7/10.
 */
/*
 对象: banner
 属性: imgs, index , imgW , time , interval , timer
 行为: init , rightClick , leftClick , stopAuto , startAuto , addAuto , animate , circleClick
 */
$(function () {
    function javascriptFn(){
        var javascript = $("#javascrit p");
        var javascriptInner = $("#javascriptInner");
        var css3 = $("#css3");
        var css3Inner = $(".css3Inner");
        css3.click(function(){
            css3Inner.slideToggle(500);
        });
        javascript.click(function(){
            javascriptInner.slideToggle(500);
        });
    }
    javascriptFn()
})