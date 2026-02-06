const lightbox = document.getElementById("lightbox");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    document.getElementById("lb-image").src = item.dataset.image;
    document.getElementById("lb-title").textContent = item.dataset.title;
    document.getElementById("lb-author").textContent = item.dataset.author || "";
    document.getElementById("lb-position").textContent = item.dataset.position || "";
    document.getElementById("lb-celestial").textContent = item.dataset.celestial || "";
    document.getElementById("lb-date").textContent = item.dataset.date || "";
    document.getElementById("lb-location").textContent = item.dataset.location || "";
    document.getElementById("lb-equipment").textContent = item.dataset.equipment || "";
    document.getElementById("lb-exposure_time").textContent = item.dataset.exposure_time || "";
    document.getElementById("lb-focal_length").textContent = item.dataset.focal_length || "";
    document.getElementById("lb-content").textContent = item.dataset.content || "";

    lightbox.classList.remove("hidden");
  });
});

lightbox.querySelector(".lightbox-close").onclick =
lightbox.querySelector(".lightbox-backdrop").onclick = () => {
  lightbox.classList.add("hidden");
};
