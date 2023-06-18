
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    var topBtn = $('.pagetop');
    topBtn.hide();
  
    // ボタンの表示設定
    $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
      }
    });
  
    // ボタンをクリックしたらスクロールして上に戻る
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 300, 'swing');
      return false;
    });
  
    //ドロワーメニュー
    $("#MenuButton").click(function () {
      // $(".l-drawer-menu").toggleClass("is-show");
      // $(".p-drawer-menu").toggleClass("is-show");
      $(".js-drawer-open").toggleClass("open");
      $(".drawer-menu").toggleClass("open");
      $("html").toggleClass("is-fixed");
  
    });
  
  
  
    // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  
    $(document).on('click', 'a[href*="#"]', function () {
      let time = 400;
      let header = $('header').innerHeight();
      let target = $(this.hash);
      if (!target.length) return;
      let targetY = target.offset().top - header;
      $('html,body').animate({ scrollTop: targetY }, time, 'swing');
      return false;
    });
  
  });
  
  // ハンバーガーメニュー
  jQuery('.header__hamburger').on('click',function(e) {
    e.preventDefault();
    jQuery('.header__inner').toggleClass('is-active');
    jQuery('.header__hamburger-bar').toggleClass('is-active');
    jQuery(".header__drawer").slideToggle(200);
    return false;
  });
  
  // mainViewのswiper
  const mainViewSwiper = new Swiper(".js-mainView-swiper", {
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {     //追記
      delay: 4000,   //追記
    },
  });
  

  // headerの高さを引く
  $(function () {
    var headH = $(".header__inner").outerHeight();
    var animeSpeed = 500;
    var urlHash = location.hash;
    if (urlHash) {
        $("body,html").scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top - headH;
            $("body,html").stop().animate({
                scrollTop: position
            }, animeSpeed);
        }, 0);
    }
  });