const email = document.getElementById("email");
const divs = document.getElementsByClassName("questions");

email.addEventListener("input", event => {
    const seed = event.target.value.trim().toLowerCase();
    if (seed.endsWith("@ucsd.edu")) {
        document.title = document.title.replace("|", ` for ${seed} |`);
        const url = new URL(window.location);
        url.searchParams.set("email", seed);
        window.history.pushState(null, "", url.toString());
    }
    for (const div of divs) {
        const elements = div.children;
        for (const question of elements) {
            question.classList.add("d-none");
        };
        if (seed.endsWith("@ucsd.edu")) {
            const chance = new Chance(`${div.id}-${seed}`);
            chance.pickone(elements).classList.remove("d-none");
        };
    };
});

(new URL(window.location)).searchParams.forEach((val, key) => {
    document.getElementById(key).value = val;
});
email.dispatchEvent(new Event("input"));
