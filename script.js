let task_textis = document.getElementById('task_text').value;

let addtask = document.getElementById("add_task");
addtask.onclick = () => {
    let task_textis = document.getElementById('task_text').value;
    let div = document.createElement("div");
    document.body.appendChild(div);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    div.innerText = task_textis;
    document.getElementById('task_text').value = "";

    
    div.appendChild(checkbox);
}


const adddiv = () => {
    let div = document.createElement("div");
    document.body.appendChild(div);
}
