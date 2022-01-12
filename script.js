const el = document.querySelector(".container");

el.addEventListener("click", ({ target }) => {
  target.style.opacity = 0;
});

document.addEventListener("keydown", ({ keyCode, target: body }) => {
  const el = body.querySelector(".container");

  if (keyCode === 32 && el) {
    el.remove();
  }
});
