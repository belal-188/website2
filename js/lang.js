document.querySelector(".current-lang").onclick = function() {
    document.querySelector(".lang-dropdown").style.display = "block";
};

window.addEventListener("click", function(event) {
    if (!event.target.closest('.switch-lang')) {
        document.querySelector(".lang-dropdown").style.display = "none";
    }
});