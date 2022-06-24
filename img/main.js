$(function () {
  var bannerSwiper = new Swiper("#homeBanner", {
    pagination: {
      el: "#homeBanner .swiper-pagination",
    },
  });
  var characterSwiper = new Swiper("#homeCharacter", {
    effect: "fade",
    speed: 500,
    pagination: {
      el: "#homeCharacter .swiper-pagination",
      clickable: true,
    },
  });
});
