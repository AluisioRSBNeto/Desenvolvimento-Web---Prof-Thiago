let itens = JSON.parse(localStorage.getItem("itens")) ?? []
console.log(itens)

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let lista = document.getElementById("lista")

for (let index = 0; index < itens.length; index++) {
    let li = document.createElement("li")
    li.textContent = itens[index]
    lista.appendChild(li)
}

btn.addEventListener("click", function () {
    if (input.value.trim() === "") return
    itens.push(input.value)

    localStorage.setItem("itens", JSON.stringify(itens))

    let li = document.createElement("li")
    li.textContent = input.value
    lista.appendChild(li)
    input.value = ''
})