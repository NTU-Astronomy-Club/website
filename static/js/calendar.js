document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".calendar-checkbox");
    const container = document.getElementById("calendar-container");

    function updateCalendar() {
        container.innerHTML = "";

        // 取得勾選的日曆
        const selectedUrls = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.url);

        if(selectedUrls.length === 0) {
            container.innerHTML = "<p>請選擇至少一個日曆</p>";
            return;
        }

        // 組合 URL
        // Google Calendar 可以用多個 src=xxx&src=yyy 的形式
        const iframeSrc = "https://calendar.google.com/calendar/embed?" + selectedUrls.join("&");

        const iframe = document.createElement("iframe");
        iframe.src = iframeSrc;
        iframe.style.width = "100%";
        iframe.style.height = "600px";
        iframe.style.border = "0";
        iframe.style.minHeight = "400px";

        container.appendChild(iframe);
    }

    checkboxes.forEach(cb => cb.addEventListener("change", updateCalendar));

    // 預設載入
    updateCalendar();
});