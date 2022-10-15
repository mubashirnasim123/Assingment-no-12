function add(){
    var task = document.getElementById("task").value
    var newTask = document.createElement('li')
    var taskNode = document.createTextNode(task)
    newTask.appendChild(taskNode)
    document.getElementById("tasklist").appendChild(newTask)
    }
    
    function del(){
        var delTask = document.getElementById("tasklist")
        delTask.removeChild(delTask.lastElementChild)
    }