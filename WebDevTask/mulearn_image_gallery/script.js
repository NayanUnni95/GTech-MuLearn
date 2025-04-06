const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1686201411675-68a0b8acda23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    category: "3D Renders",
    caption: "Earth from Space",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1740137660661-274c804a891d?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
    caption: "Urban Hotel Arial View",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1740525967545-d71177282769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    category: "3D Renders",
    caption: "Illusion Fireworks",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1740395816867-1d6dbd89d49c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    category: "3D Renders",
    caption: "Geometric Shape",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1726930095303-4aac9ba8bb74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
    caption: "Rain forest",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1735615479490-237b941e996a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    category: "3D Renders",
    caption: "Green Pattern",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1742316946714-b06b7cb98e53?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
    caption: "Ice Cave",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1728039759349-d5e2a087b402?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
    caption: "Hiking Lake",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1738941329663-4401102e9dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    category: "3D Renders",
    caption: "Grass Interior Design",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1741508453232-1e546c28e916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
    caption: "Tokyo Night Aerial view",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "tech",
    caption: "Electrical Engineering",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "tech",
    caption: "Website Programming",
  },
  {
    id: 13,
    src: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "tech",
    caption: "Artificial Intelligence",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1662614380507-72f8d36f1d2b?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "tech",
    caption: "Radio Telescope",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1639932068331-c6518cb3b8db?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "tech",
    caption: "Virtual Reality",
  },
  {
    id: 16,
    src: "https://plus.unsplash.com/premium_photo-1675826725982-e8508781c558?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
    caption: "Night Space Sky",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1717347424091-08275b73c918?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "tech",
    caption: "Optimus Robot",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1741447679902-ea76644c3d10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    category: "3D Renders",
    caption: "Ice Glass Blocks",
  },
];

const galleryContainer = document.getElementById("imageGallery");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.querySelector(".modal-caption");
const closeModal = document.querySelector(".close-modal");
const filterSelect = document.getElementById("filterSelect");
const brightnessSlider = document.getElementById("brightnessSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentFilter = "all";
let currentImageIndex = 0;
let filteredImages = [...images];

function createGalleryItem(image) {
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.innerHTML = `
        <img src="${image.src}" alt="${image.caption}" loading="lazy">
        <div class="caption">${image.caption}</div>
    `;

  div.addEventListener("click", () => openModal(image));
  return div;
}

function renderGallery() {
  galleryContainer.innerHTML = "";
  filteredImages.forEach((image) => {
    galleryContainer.appendChild(createGalleryItem(image));
  });
}

function openModal(image) {
  modalImage.src = image.src;
  modalCaption.textContent = image.caption;
  modal.style.display = "block";
  currentImageIndex = filteredImages.findIndex((img) => img.id === image.id);
}

function closeModalHandler() {
  modal.style.display = "none";
}

function filterImages(category) {
  currentFilter = category;
  filteredImages =
    category === "all"
      ? [...images]
      : images.filter((image) => image.category === category);
  renderGallery();
}

function adjustBrightness(value) {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  galleryItems.forEach((img) => {
    img.style.filter = `brightness(${value}%)`;
  });
}

function navigateImages(direction) {
  if (filteredImages.length === 0) return;

  if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
  } else {
    currentImageIndex =
      (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
  }

  const image = filteredImages[currentImageIndex];
  openModal(image);
}

filterSelect.addEventListener("change", (e) => filterImages(e.target.value));

brightnessSlider.addEventListener("input", (e) =>
  adjustBrightness(e.target.value)
);

closeModal.addEventListener("click", closeModalHandler);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModalHandler();
});

prevBtn.addEventListener("click", () => navigateImages("prev"));
nextBtn.addEventListener("click", () => navigateImages("next"));

document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") navigateImages("prev");
    if (e.key === "ArrowRight") navigateImages("next");
    if (e.key === "Escape") closeModalHandler();
  }
});

renderGallery();
