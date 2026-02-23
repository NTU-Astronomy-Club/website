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
    
    const hiddenContent = item.querySelector(".gallery-hidden-content");
    document.getElementById("lb-content").innerHTML =
      hiddenContent ? hiddenContent.innerHTML : "";

    lightbox.classList.remove("hidden");
  });
});

lightbox.querySelector(".lightbox-close").onclick =
lightbox.querySelector(".lightbox-backdrop").onclick = () => {
  lightbox.classList.add("hidden");
};
