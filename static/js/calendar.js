document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".calendar-checkbox");
    const container = document.getElementById("calendar-container");

    function updateCalendar() {
        container.innerHTML = "";

        const baseUrl = "https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showCalendars=0&ctz=Asia%2FTaipei";
        let params = "";
        checkboxes.forEach(cb => {
            if (cb.checked) {
                
                const encodedColor = encodeURIComponent(cb.dataset.color);
                params += `&src=${encodeURIComponent(cb.dataset.cid)}&color=${encodedColor}`;
            }
        });
        const iframeSrc = params ? baseUrl + params : "about:blank";
        if (!params) {
            container.innerHTML = "<p>請選擇至少一個日曆</p>";
            return;
        }
        
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