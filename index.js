document.addEventListener("DOMContentLoaded", function () {
  let degrees = 0;
  const nextDesc = document.querySelector(".swiper-button-next");
  const redDiv = document.querySelector(".bg-red-400");
  redDiv.addEventListener("click", function () {
    degrees = degrees + 90;
    redDiv.style.transform = `rotate(${degrees}deg)`;
    nextDesc.click();
  });
});
