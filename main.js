document.addEventListener("DOMContentLoaded", function () {
    const page_settings = document.querySelector(".page_settings");
    const btn_settings = document.getElementById("btn_page_settings");
    let active = false;
    btn_settings.addEventListener("click", function () {
        page_settings.classList.toggle("active_interface"); 
        if (active == false) {
        document.body.style.overflow = "hidden";
        active = true;
        } else {
        document.body.style.overflow = "initial";
        active = false;
        }
    });
});