console.log("script.js loaded")

const html = document.documentElement;
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");

const userName = document.getElementById("userName");
const nameText = document.getElementById("nameText");

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



/* Name Change */
const savedName = localStorage.getItem("name");


/* If the heading exists and there's a saved name already available,
then set the heading text to "Welcome, savedName" */
if (nameText && savedName) {
    nameText.textContent = `Welcome, ${savedName}`;
}


/* If there a userName input field, then...
1. Find the form containing the userName input
2. Wait for the user to press submit (eventListener)
3. Stop the browser from reloading the page (default behaviour with forms)
4. Set the value in userName to the "name" key in localStorage
5. Send user to the homepage.
*/
if (userName) {
    const form = userName.closest("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        localStorage.setItem("name", userName.value);
        window.location.href = "/index.html";
    });
}