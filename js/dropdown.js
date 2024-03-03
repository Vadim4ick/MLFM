document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll("[data-dropdownBtn]");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const list = this.closest("[data-dropdown]").querySelector(
        "[data-dropdownList]",
      );
      const icon = btn.querySelector("svg");

      if (list.style.maxHeight === "" || list.style.maxHeight === "0px") {
        list.style.maxHeight = "200px";

        if (icon) {
          icon.style.transform = "rotate(180deg)";
        }
      } else {
        list.style.maxHeight = "0px";

        if (icon) {
          icon.style.transform = "rotate(0deg)";
        }
      }
    });
  });
});
