// Declare the variable
let input = document.querySelector('input')
let button = document.querySelector('button')
let ul = document.querySelector('ul')

// function for addTask
let addTask = () => {
    let inputval = input.value.trim()
    //  input is empty
    if (inputval === '') {
        alert('Please Enter a Task')
    }

    // CreateElement for store Data

    let li = document.createElement('li')
    let title = document.createElement('b')
    let checkbox = document.createElement('input')
    let editButton = document.createElement('button')
    let delebutton = document.createElement('span')
    
// add Data in created Element

    editButton.innerHTML = 'Edit'
    checkbox.type = 'checkbox'
    delebutton.innerHTML = 'X'
    title.innerHTML = inputval

    // append CreateElement in li CreateElement

    li.appendChild(checkbox)
    li.appendChild(title)
    li.appendChild(editButton)
    li.appendChild(delebutton)

    // append li CreateElement in ul

    ul.appendChild(li)

// Event for Task Completion and Uncompletion

    checkbox.addEventListener('change', () => {
        checkbox.checked !== true ? title.style.textDecoration = 'none' : title.style.textDecoration = 'line-through'
    })

    // Event for Delete

    delebutton.addEventListener('click', () => {
        li.remove()
    })

// Event for making Task editable

    let isEditable = false
    editButton.addEventListener('click', () => {
        if (isEditable) {
            title.contentEditable = 'false'
            title.classList.remove('edit')
        }
        else {
            title.contentEditable = 'true'
            title.classList.add('edit')

        }
        isEditable = !isEditable
    })

    // empty the the input field after adding Task

    input.value = ''

}

//  Event for Adding Task

button.addEventListener('click', addTask)

