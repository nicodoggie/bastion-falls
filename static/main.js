function hideSidebar() {
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("sidebar-container");
  burger.addEventListener("click", function () {
    console.log("Click");
    if (
      sidebar.hasAttribute("data-display") &&
      sidebar.getAttribute("data-display") == "show"
    ) {
      sidebar.setAttribute("data-display", "hidden");
    } else {
      sidebar.setAttribute("data-display", "show");
    }
  });
}
function onLoad(event) {
  // const nav = document.getElementsByName("nav-section");
  // nav.forEach((elem) => {
  //   elem.addEventListener("change", (event) => {
  //     nav.forEach((search) => {
  //       if (elem !== search) {
  //         search.checked = false;
  //       }
  //     });
  //   });
  // });

  hideSidebar();
}
document.addEventListener("DOMContentLoaded", onLoad);
