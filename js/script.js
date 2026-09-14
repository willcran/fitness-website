console.log("script.js loaded")

const html = document.documentElement;
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");

/* Loads the preferred theme from storage */
const savedTheme = localStorage.getItem("theme");

if (savedTheme !== "system") {
    document.body.classList.add(savedTheme)
    html.setAttribute("theme", savedTheme);
}

/* Cycles through the 3 options */
function themeCycle() {
    const currentTheme = localStorage.getItem("theme");

    /* Changes system theme to light mode */

    if (!currentTheme || currentTheme === "system"){
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");

        themeIcon.src = "assets/icons/sun_light.png"
    }

    /* If on light mode, next button click is dark */
    else if (currentTheme === "light") {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");

        themeIcon.src = "assets/icons/moon_light.png"
    }

    /* Change dark to system theme */
    else if (currentTheme === "dark") {
        html.removeAttribute("data-theme");
        localStorage.setItem("theme", "system");

        themeIcon.src = "assets/icons/computer_light.png"
    }
}

themeButton.addEventListener("click", themeCycle);