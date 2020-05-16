//Return top

window.addEventListener("scroll", () => {
  const $btnReturn = document.querySelector("#returnTop");
  let y = window.scrollY;

  if (y > 100) {
    $btnReturn.classList.add("is-active");
  } else {
    $btnReturn.classList.remove("is-active");
  }

  $btnReturn.addEventListener("click", () => {
    window.scroll({
      top: 100 + "%",
      behavior: "smooth",
    });
  });
});
