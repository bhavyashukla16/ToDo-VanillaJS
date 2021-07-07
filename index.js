let todos = []
// document.getElementById("task").onkeyup(() => {
//     document.getElementById("task").innerHTML = document.getElementById("task").value
// })
document.getElementById("btn").addEventListener("click", () => {
    //console.log("hi");
    var taskName = document.getElementById("task").value;
    var taskDate = document.getElementById("date").value;
    todos.push([taskName, taskDate]);
    sortTodos()
    console.log(todos);
    displayList()
})

document.getElementById("clear").addEventListener("click", () => {
    clearTodos()
    displayList()
})

//document.querySelector("table tbody").innerHTML = displayList()

function sortTodos() {
    todos.sort(function(a, b) {
        var d1 = new Date(a[1]);
        var d2 = new Date(b[1]);
        return d1.getTime() - d2.getTime()
    })
}

function displayList() {
    todos.forEach((value) => {
            var tableRow = document.createElement("tr")
            var tableCell1 = document.createElement("td")
            var tableCell2 = document.createElement("td")
            tableCell1.appendChild(document.createTextNode(value[0]))
            tableCell2.appendChild(document.createTextNode(value[1]))
            tableRow.appendChild(tableCell1)
            tableRow.appendChild(tableCell2)
            document.querySelector("table tbody").appendChild(tableRow)
    })
}

function clearTodos() {
    todos = []
}