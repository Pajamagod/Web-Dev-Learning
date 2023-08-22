const buttons = document.querySelector("#buttons")

const result = document.getElementById("result")

buttons.addEventListener("click", (e) => {
    console.log(e.target.value)
})
console.log(buttons)
console.log(result)