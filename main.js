function dizOi() {
    console.log("Oi do dizOi")
}

const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", () => {
    console.log("Oi do Anonimo")
})

robotron.addEventListener("click", dizOi)
