const body = document.body;
const toggleBtn = document.getElementById("themeToggleBtn");

function setTheme(theme) {
    if (theme === "dark") {
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
    } else {
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#000000";
    }
    localStorage.setItem("theme", theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
}

toggleBtn.addEventListener("click", toggleTheme);


const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);