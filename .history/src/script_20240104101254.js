document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");

  sidebar.addEventListener("wheel", function (event) {
    const deltaY = event.deltaY;
    this.scrollTop += deltaY;
    event.preventDefault();
  });

  mainContent.addEventListener("wheel", function (event) {
    const deltaY = event.deltaY;
    this.scrollTop += deltaY;
    event.preventDefault();
  });
});
