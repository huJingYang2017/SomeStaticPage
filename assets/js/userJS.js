$(function ($) {
    let sUserAgent = navigator.userAgent.toLowerCase();
    let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    let bIsMidp = sUserAgent.match(/midp/i) == "midp";
    let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    let bIsAndroid = sUserAgent.match(/android/i) == "android";
    let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    let radius = 150;
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        //console.log("当前是电脑打开");
        //动态设置导航宽度 与 页面样式
        radius = 200;
        $(".containerAll").css('background-image', ' url(./assets/images/crosswiseBg.jpg)');
        $("#container").addClass("container");
        $("#gooey-round3").addClass("navMain");

    } else {
        //console.log("当前是手机打开");
        //动态设置导航宽度 与 页面样式
        radius = 150;
        $(".containerAll").css('background-image', ' url(./assets/images/verticalBg.jpg)');
        $("#container").addClass("containerPhone");
        $("#gooey-round3").addClass("navMainPhone");
    }

    //液态融合 导航展示插件调用
    $("#gooey-round3").gooeymenu({
        bgColor: "#f7d05c",
        contentColor: "#000",
        style: "circle",
        horizontal: {
            menuItemPosition: "spaced"
        },
        vertical: {
            menuItemPosition: "spaced",
            direction: "up"
        },
        circle: {
            radius: radius
        },
        margin: "small",
        size: 100,
        bounce: true,
        bounceLength: "small",
        transitionStep: 50,
        hover: "rgba(255, 193, 7)"
    });
});
