document.addEventListener("DOMContentLoaded", function () {
  // TOGGLE MENU
  const menu = document.querySelector("#menu");
  const sidebar = document.querySelector("#sidebar");
  const close = document.querySelector("#close");

  // open
  menu.addEventListener("click", function () {
    console.log(sidebar.style.right);
    sidebar.style.right = 0;
    close.style.display = "block";
    menu.style.display = "none";
  });
  // close
  close.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    close.style.display = "none";
    menu.style.display = "block";
  });

  // ROTATING SLIDER
  let degrees = 0;
  const nextDesc = document.querySelector(".swiper-button-next");
  const redDiv = document.querySelector("#sirkol");
  redDiv.addEventListener("click", function () {
    degrees = degrees + 21.1764;
    redDiv.style.transform = `rotate(${degrees}deg)`;
    nextDesc.click();
  });
});
