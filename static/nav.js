function loadNavToggle(navToggles, toggledNS = "navToggled") {
  if (!window.localStorage[toggledNS]) {
    window.localStorage[toggledNS] = undefined;
  }

  navToggles.forEach((clickedNav) => {
    const id = clickedNav.getAttribute("id");

    if (id === window.localStorage[toggledNS]) {
      const subTree = document.querySelector(`[data-for="${id}"]`);
      clickedNav.checked = true;
      subTree.setAttribute("data-display", "show");
    }

    clickedNav.addEventListener("change", (event) => {
      console.log(id);
      const subTree = document.querySelector(`[data-for="${id}"]`);
      if (clickedNav.checked) {
        window.localStorage[toggledNS] = id;
        subTree.setAttribute("data-display", "show");
        navToggles.forEach((search) => {
          if (clickedNav !== search) {
            search.checked = false;
            const searchId = search.getAttribute("id");
            const searchTree = document.querySelector(
              `[data-for="${searchId}"]`
            );
            searchTree.setAttribute("data-display", "hidden");
          }
        });
      } else {
        subTree.setAttribute("data-display", "hidden");
        window.localStorage.navToggled = undefined;
      }
    });
  });
}
