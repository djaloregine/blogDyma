import "../assets/style/styles.scss"
import "./form.scss"

const form = document.querySelector("form");
let errors = [];
const errorElement = document.querySelector("#errors");

form.addEventListener("submit", async e => {
    e.preventDefault();

    const formData = new FormData(form);
    const article = Object.fromEntries(formData.entries());
    if (formIsValid(article)) {
        try {
            const json = JSON.stringify(article);
            const response = await fetch("https://restapi.fr/api/articlerd", {
                method: "POST",
                body: json,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const body = await response.json();
            console.log(body);
        } catch (e) {
            console.error("e : ", e);
        }
    }
});

const formIsValid = (article) => {
    if (!article.author || !article.category || !article.content) {
        errors.push('Vous devez renseignez tous les champs');

    } else {
        errors = [];
    }
    if (errors.length) {
        let errorHTML = ''
        errors.forEach((e) => {
            errorHTML += `<li> ${e} </li>`
        })
        errorElement.innerHTML = errorHTML;
        return false;
    } else {
        errorElement.innerHTML = '';
        return true;
    }
}