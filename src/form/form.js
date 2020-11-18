import "../assets/style/styles.scss"
import "./form.scss"

const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new formData(form);
    const entries = formData.entries();

    console.log(entries);

})