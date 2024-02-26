document.addEventListener("DOMContentLoaded", function () {
  // TOGGLE MENU
  const toggleButton = document.querySelector("#menu");
  const sidebar = document.querySelector("#sidebar");

  toggleButton.addEventListener("click", function () {
    console.log(sidebar.style.right);
    if (sidebar.style.right !== "0px") {
      sidebar.style.right = 0;
    } else {
      sidebar.style.right = "-100%";
    }
  });

  // ROTATING SLIDER
  let degrees = 0;
  const nextDesc = document.querySelector(".swiper-button-next");
  const redDiv = document.querySelector(".bg-red-400");
  redDiv.addEventListener("click", function () {
    degrees = degrees + 90;
    redDiv.style.transform = `rotate(${degrees}deg)`;
    nextDesc.click();
  });
});
