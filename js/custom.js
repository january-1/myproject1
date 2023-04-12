$(document).ready(function () {

    // 메뉴 오버시(mouseenter/mouseover)
    $(".navi>li").mouseover(function () {
        // $(this).find(".submenu").stop().show();
         $(this).find(".submenu").stop().slideDown(500);
        // $(".submenu").stop().slideDown(500);

     });

     // 메뉴 아웃시 (mouseleave/mouseout)
     $(".navi>li").mouseout(function () {
        // $(this).find(".submenu").stop().hide();
    $(this).find(".submenu").stop().slideUp(500);
     //$(".submenu").stop().slideUp(500);
 });


 //마우스 움직임에 반응하는 이미지
 $(".figure1").on("mousemove", function (e) {
    //변수 posX에 마우스 커서의 x축 위치 저장
    var posX = e.pageX;
    //변수 posY에 마우스 커서의 y축 위치 저장
    var posY = e.pageY;

    //첫번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
    $(".p11").css({ "right": 20 - (posX / 30), "bottom": 20 - (posY / 30) });
    $(".p12").css({ "right": 130 + (posX / 20), "bottom": -40 + (posY / 20) });
    $(".p13").css({ "right": 60 + (posX / 20), "bottom": 180 + (posY / 20) });

});
    
});