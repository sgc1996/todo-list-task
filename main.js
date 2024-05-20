function createNewTodo() {
    const todoInput = document.getElementById('inputItem').value

    if (todoInput === '') {
        alert('Enter Your Todo')
        return
    }

    //Create New Task
    const newTask = document.createElement('li')
    newTask.id = 'singaleTodo'
    newTask.className = 'singale-todo'
    newTask.textContent = todoInput

    //Add Delete Button
    const deleteBtn = document.createElement('button')
    deleteBtn.id = 'deletBtn'
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = 'Delete'
    deleteBtn.onclick = function () {
        newTaskContainer.remove()
    }

    // Create a container for the task and button
    const newTaskContainer = document.createElement('div')
    newTaskContainer.className = 'task-container'

    newTaskContainer.appendChild(newTask)
    newTaskContainer.appendChild(deleteBtn)

    document.getElementById('inputData').appendChild(newTaskContainer)

    document.getElementById('inputItem').value = ''

}

