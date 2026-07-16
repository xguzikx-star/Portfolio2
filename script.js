document.querySelector("#year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(".exp-item");

function activateItem(item) {
  items.forEach(el => {
    const open = el === item;
    el.classList.toggle("open", open);
    el.querySelector(".exp-toggle").textContent = open ? "−" : "+";
  });
}

items.forEach(item => {
  item.querySelector(".exp-head").addEventListener("click", () => activateItem(item));
});
