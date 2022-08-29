const groceries = []

const groceryList = document.getElementById('groceryList')
const addButton = document.getElementById('addButton')
const newGroceryInput = document.getElementById('newGrocery')

const createGroceryElement = grocery => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery
    groceryElement.classList.add('groceryItem')
    return groceryElement
}

const addGrocery = newGrocery =>{
    groceryList.appendChild(createGroceryElement(newGrocery))
}

addButton.addEventListener('click', e =>{
    e.preventDefault()
    const value = newGroceryInput.value
    if(newGroceryInput.value){
        addGrocery(value)
        newGroceryInput.value = null
    }
})

groceries.map(grocery=>addGrocery(grocery))