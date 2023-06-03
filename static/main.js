function onLoad(event) {
  const nav = document.getElementsByName("nav-section");
  nav.forEach((elem) => {
    elem.addEventListener("change", (event) => {
      nav.forEach((search) => {
        if (elem !== search) {
          search.checked = false;
        }
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", onLoad);
