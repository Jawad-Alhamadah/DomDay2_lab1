
let button_1 = document.getElementById("button1")
let button_2 = document.getElementById("button2")
let button_3 = document.getElementById("button3")

let hidden = document.createElement("span")
let active = document.createElement("span")

hidden.classList.add("hidden")
active.classList.add("active")

hidden.innerText="Button1"

active.innerText=""

button_1.appendChild(hidden)
button_1.appendChild(active)



hidden = document.createElement("span")
active = document.createElement("span")

hidden.classList.add("hidden")
active.classList.add("active")

hidden.innerText="Button2"

active.innerText=""

button_2.appendChild(hidden)
button_2.appendChild(active)


hidden = document.createElement("span")
active = document.createElement("span")

hidden.classList.add("hidden")
active.classList.add("active")

hidden.innerText="Button3"

active.innerText=""

button_3.appendChild(hidden)
button_3.appendChild(active)







