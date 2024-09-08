var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
            },
            autoplay: {
                        delay: 5000,
                      },
  });
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 40
      }
  },
  autoplay: {
    delay: 3000,
  },
  });



















































// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//           slidesPerView: 2,
//           spaceBetween: 20
//         },
//         // when window width is >= 480px
//         480: {
//           slidesPerView: 3,
//           spaceBetween: 30
//         },
//         // when window width is >= 640px
//         640: {
//           slidesPerView: 4,
//           spaceBetween: 40
//         }
//       },
//       autoplay: {
//         delay: 5000,
//       },

//   });