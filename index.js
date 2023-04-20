let h2 = document.querySelector("h2");
let div1 = document.querySelector(".menu");
let img = document.querySelector(".img");
let number = [
  "Хм...",
  "Не зараз",
  "Не можу сказати",
  "Ні",
  "Хочу персики",
  "Сьогодні чарівні як ніколи",
  "Чудова погода для прогулянки",
  "Поїхали!",
  "Піцца - чудова ідея",
  "Тільки білий шоколад",
  "Чому б ні",
  "Відпочинок - гарна думка :)",
  "Все вийде , потрібно трохи часу",
];

document.addEventListener("click", function (e) {
  animateBounce(div1, () => {
    let randomIn = Math.floor(Math.random() * number.length);
    console.log(randomIn);
    h2.innerHTML = number[randomIn];
  });
  hideThenShowText();
});

function hideThenShowText() {
  h2.classList.toggle("show");
  img.classList.toggle("show");
  setTimeout(() => {
    h2.classList.toggle("show");
    img.classList.toggle("show");
  }, 550);
}

function animateBounce(div, callback) {
  setTimeout(function () {
    div.style.left = "-20px";
  }, 150);
  setTimeout(function () {
    div.style.left = "15px";
  }, 180);
  setTimeout(function () {
    div.style.left = "-20px";
  }, 240);
  setTimeout(function () {
    div.style.left = "20px";
  }, 280);
  setTimeout(function () {
    div.style.left = "-15px";
  }, 350);
  setTimeout(function () {
    div.style.left = "15px";
  }, 300);
  setTimeout(function () {
    div.style.left = "-20px";
  }, 280);

  setTimeout(() => {
    callback();
  }, 350);
}
