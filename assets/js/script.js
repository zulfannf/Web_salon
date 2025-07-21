function resolvePath(path) {
  const currentPath = window.location.pathname;
  if (currentPath.includes("/pages/")) {
    return `../${path}`;
  } else {
    return path;
  }
}

function loadComponent(id, filePath) {
    const target = document.getElementById(id);
    if(target) {
        fetch(resolvePath(filePath))
        .then(res => res.text())
        .then(data => {
            target.innerHTML = data;
        })
        .catch(err => console.error(`Gagal load ${filePath}: `, err));
    }
};

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar.html");
    loadComponent("footer", "components/footer.html");
    loadComponent("copyright", "components/copyright.html");
});