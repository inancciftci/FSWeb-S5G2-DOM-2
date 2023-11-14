import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

// MODAL DISPLAY for FORM

const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const reservationBtns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
reservationBtns.forEach((e) => {
  e.addEventListener("click", () => {
    modal.style.display = "block";
  });
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
submitBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// IMG SCALING

document.querySelectorAll("img").forEach((e) => {
  e.addEventListener("mouseenter", (e) => {
    e.target.style.filter = "grayscale(1)";
  });
  e.addEventListener("mouseleave", (e) => {
    e.target.style.filter = "grayscale(0)";
  });
  e.addEventListener("dblclick", (e) => {
    e.target.style.transform = "scale(50%)";
  });
  e.addEventListener("click", (e) => {
    e.target.style.transform = null;
  });
});

// LOAD - BG CHANGE

// window.addEventListener("load", (e) => {
//   console.log("sure basladi");
//   setTimeout(() => {
//     document.querySelector("body").style.background = "red";
//     console.log("2saniye doldu");
//   }, 2000);
// });
