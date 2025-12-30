document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".calendar-checkbox");
    const container = document.getElementById("calendar-container");

    function updateCalendar() {
        container.innerHTML = "";

        const selected_urls = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.url);

        if(selected_urls.length === 0) {
            container.innerHTML = "<p>請選擇至少一個日曆</p>";
            return;
        }

        const iframeSrc = "https://calendar.google.com/calendar/embed?" +selected_urls.join("&");

        const iframe = document.createElement("iframe");
        iframe.src = iframeSrc;
        iframe.style.width = "100%";
        iframe.style.height = "600px";
        iframe.style.border = "0";
        iframe.style.minHeight = "400px";

        container.appendChild(iframe);
    }

    checkboxes.forEach(cb => cb.addEventListener("change", updateCalendar));

    updateCalendar();
});