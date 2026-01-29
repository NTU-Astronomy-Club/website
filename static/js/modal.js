document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    document.getElementById("modal-image").src = item.dataset.image;
    document.getElementById("modal-title").textContent = item.dataset.title;
    document.getElementById("modal-author").textContent = item.dataset.author;
    document.getElementById("modal-celestial").textContent = item.dataset.celestial;
    document.getElementById("modal-date").textContent = item.dataset.date;
    document.getElementById("modal-location").textContent = item.dataset.location;
    document.getElementById("modal-equipment").textContent = item.dataset.equipment;
    document.getElementById("modal-description").textContent = item.dataset.content;

    document.getElementById("gallery-modal").classList.remove("hidden");
  });
});

document.getElementById("gallery-modal").addEventListener("click", () => {
  document.getElementById("gallery-modal").classList.add("hidden");
});
