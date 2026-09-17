console.log("script.js loaded")

const html = document.documentElement;
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");

/* Loads the preferred theme from storage */
const savedTheme = localStorage.getItem("theme");
const savedIcon = localStorage.getItem("icon");

if (savedTheme !== "system") {
    html.setAttribute("data-theme", savedTheme);
}

themeIcon.src = savedIcon;

/* Cycles through the 3 options */
function themeCycle() {
    const currentTheme = localStorage.getItem("theme");

    /* Changes system theme to light mode */

    if (!currentTheme || currentTheme === "system"){
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        localStorage.setItem("icon", "/assets/icons/sun_light.png");

        themeIcon.src = localStorage.getItem("icon");
    }

    /* If on light mode, next button click is dark */
    else if (currentTheme === "light") {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("icon", "/assets/icons/moon_light.png");

        themeIcon.src = localStorage.getItem("icon");
    }

    /* Change dark to system theme */
    else if (currentTheme === "dark") {
        html.removeAttribute("data-theme");
        localStorage.setItem("theme", "system");
        localStorage.setItem("icon", "/assets/icons/computer_light.png");

        themeIcon.src = localStorage.getItem("icon");
    }
}

themeButton.addEventListener("click", themeCycle);