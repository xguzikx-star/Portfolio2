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

// Category tiles (Web design / Branding / Teksty / Social media) toggle independently
const cats = document.querySelectorAll(".cat-item");
cats.forEach(cat => {
  cat.querySelector(".cat-head").addEventListener("click", () => {
    const open = !cat.classList.contains("open");
    cat.classList.toggle("open", open);
    cat.querySelector(".cat-toggle").textContent = open ? "−" : "+";
  });
});
