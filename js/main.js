//Return top
const $btnReturn = document.querySelector("#returnTop");
$btnReturn.addEventListener("click", () => {
  window.scroll({
    top: 100 + "%",
    behavior: "smooth",
  });
});
