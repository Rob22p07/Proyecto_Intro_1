const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click", () => {
    container.classList.remove("toogle");
});

btnSignUp.addEventListener("click", () => {
    container.classList.add("toogle");
});
