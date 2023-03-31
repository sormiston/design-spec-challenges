const mobileMenuButton = document.getElementById("mobile-icon-menu-wrapper");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", slideInMobileNav);
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", slideOutMobileNav);
}

function slideInMobileNav() {
  mobileMenu.style.right = "0%";
}

function slideOutMobileNav() {
  mobileMenu.style.right = "-100%";
}

function renderNewItems() {
  const newItemCopy = [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  const hostElement = document.getElementById("new-features");
  const newItemTemplate = document.getElementById("new-feature-item");

  newItemCopy.forEach((copy) => {
    const importedNode = document.importNode(newItemTemplate.content, true);

    const h3 = importedNode.querySelector("h3");
    h3.textContent = copy.title;
    const p = importedNode.querySelector("p");
    p.textContent = copy.text;

    hostElement.append(importedNode);
  });
}

function renderTop3Items() {
  const top3Copy = [
    {
      num: "01",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
      imageFile: "image-retro-pcs.jpg",
    },
    {
      num: "02",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
      imageFile: "image-top-laptops.jpg",
    },
    {
      num: "03",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
      imageFile: "image-gaming-growth.jpg",
    },
  ];

  const hostElement = document.getElementById("top-3");
  const template = document.getElementById("top-3-item");
  const IMAGES_PATH = "assets/images/";

  top3Copy.forEach((copy) => {
    const importedNode = document.importNode(template.content, true);

    const img = importedNode.querySelector("img");
    img.src = IMAGES_PATH + copy.imageFile;

    const num = importedNode.querySelector("[top3item-id='num']");
    num.textContent = copy.num;

    const title = importedNode.querySelector("[top3item-id='title']");
    title.textContent = copy.title;

    const text = importedNode.querySelector("[top3item-id='text']");
    text.textContent = copy.text;

    hostElement.append(importedNode);
  });
}

renderNewItems();
renderTop3Items();
