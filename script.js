document.querySelector("#year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(".exp-item");
const progress = document.querySelector(".route-progress");
const nodes = document.querySelectorAll(".node");

const levels = {
  n1: 0.08,
  n2: 0.34,
  n3: 0.67,
  n4: 1
};

function activateItem(item) {
  items.forEach(el => {
    const open = el === item;
    el.classList.toggle("open", open);
    el.querySelector(".exp-toggle").textContent = open ? "−" : "+";
  });

  const nodeClass = item.dataset.node;
  nodes.forEach(node => node.classList.toggle("active", node.classList.contains(nodeClass)));

  const level = levels[nodeClass] || 0;
  const total = 1800;
  progress.style.strokeDashoffset = String(total - total * level);
}

items.forEach(item => {
  item.querySelector(".exp-head").addEventListener("click", () => activateItem(item));
});

activateItem(document.querySelector(".exp-item.open"));
