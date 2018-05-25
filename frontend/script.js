const newTaskForm = document.getElementById("newTaskForm")
const taskField = document.getElementById("taskField")
const taskList = document.getElementById("taskList")

const tasks = {
  tasks: [],
  addTask: function(task) {
    this.tasks.push(task)
    this.render()
  },

  render: function() {
    const listItem = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    const taskContent = document.createElement('span')
    const trashButton = document.createElement('button')
    const trashImage = document.createElement('img')
    trashImage.setAttribute("src", "../assets/trash.png")

      this.tasks.forEach(function(task) {
        listItem.appendChild(checkbox)
        listItem.appendChild(taskContent)
        listItem.appendChild(trashButton)
        trashButton.appendChild(trashImage)

        taskContent.innerText = task

        taskList.appendChild(listItem)
      })

    taskField.value = ''

  }
}

newTaskForm.addEventListener('submit', function(event) {
  event.preventDefault()

  tasks.addTask(taskField.value)
})



