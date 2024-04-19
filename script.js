const password = document.querySelector("#password");
const passwordRepeat = document.querySelector("#passwordRepeat");
const root = document.querySelector(":root");
function isInvalid() {
  if (password.value && passwordRepeat.value) {
    password.classList.add("password");
    passwordRepeat.classList.add("password");
  }

  if (password.value === passwordRepeat.value) {
    root.style.setProperty("--validator-color", "lightgreen");
  } else root.style.setProperty("--validator-color", "red");
}

password.addEventListener("input", isInvalid);
passwordRepeat.addEventListener("input", isInvalid);
