const button = document.getElementById("submit");
const form = document.getElementById("myForm");
const thankYou = document.getElementById("thank-you");
const reset = document.getElementById("reset");

button.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.add("hidden");
  thankYou.classList.remove("hidden");
});

reset.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.remove("hidden");
  thankYou.classList.add("hidden");
});
