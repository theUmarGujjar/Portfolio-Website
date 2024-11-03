
 
let menuList = document.querySelectorAll(".menus");
let menu_btn = document.querySelectorAll(".menu_btn");

menu_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    menuList.forEach((item) => {
      item.classList.toggle("menuDisplay");
    });
  });
});

// menu_btn.forEach((btn) => {
//   document.addEventListener("click", () => {
//     menuList.forEach((item) => {
//       item.classList.remove("menuDisplay");
//     });
//   });
// });
















