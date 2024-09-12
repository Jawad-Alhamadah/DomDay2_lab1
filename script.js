
let elements = [ {element:document.getElementById("button1"), text:"button1" },
                 {element:document.getElementById("button2"), text:"button2"},
                 {element:document.getElementById("button3"), text:"button3" }
]

elements.map(e => {
    let hidden = document.createElement("span")
    hidden.classList.add("hidden")
    hidden.innerText=e.text
    e.element.appendChild(hidden)
})
