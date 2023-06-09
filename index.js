// Challenge #1

/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

// const inputFieldEl = document.getElementById('input-field')
// const addButtonEl = document.getElementById('add-button')

// addButtonEl.addEventListener('click', function() {
//     // Refactor 
//     let inputValue = inputFieldEl.value
    
//     console.log(inputValue)
// })




/* Firebase Realtime Database Aside */




/* import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
// Challenge: Import the 'getDatabase' from
// "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://playground-fffb9-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(moviesInDB, inputValue)

    console.log(`${inputValue} added to database`)
}) */




/* Challenge 4: Import From Database */

// Challenge: Import 'initializeApp' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Challenge: Import 'getDatabase' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

/* import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
 // Challenge: Use the Firebase function 'push' to push inputValue to the database

    push(shoppingListInDB, inputValue)

    console.log(inputValue)
}) */


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     // Challenge: Append a new <li> with text content inputValue to the 'shopping-list' <ul>

//     // Challenge: Clear the input field when button is pressed


//     // 👇️ clear input field
//     // firstNameInput.value = '';

//      shoppingListEl.innerHTML += `<li>${inputValue}</li>`

//      inputFieldEl.value = ''
// })






/* Refactor Challenge */






// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     // Challenge: Refactor the line below into its own function.
//     // inputFieldEl.value = ""

//     clearInputFieldEl() // Call the below function up here to make sure it actually runs
    
//     // Challenge: Refactor the line below into its own function.
//     // shoppingListEl.innerHTML += `<li>${inputValue}</li>`

//     // appendItemToShoppingListEl() // - It won't work, we need a parameter value
//     appendItemToShoppingListEl(inputValue)
// })


// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(itemValue) {
//     shoppingListEl.innerHTML += `<li>${itemValue}</li>`
// }







/* Challenge: onValue function */






// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     clearInputFieldEl()

//     appendItemToShoppingListEl(inputValue)
// })

// /*
// Challenge:
// Call the onValue function with
// shoppingListInDB as the first argument and
// function(snapshot) {} as the second argument
// */

// onValue(shoppingListInDB, function(snapshot) {
//     // Challenge: Use Object.values() to convert snapshot.val() from an 
//     //Object to an Array. Create a variable for this.
    
//     let itemsArray = Object.values(snapshot.val())

//     console.log(itemsArray)
    
    
    
//     // Challenge: Console log snapshot.val() to show all the items inside 
//     //of shoppingList in the database
//     //  console.log(snapshot.val())
// })

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(itemValue) {
//     shoppingListEl.innerHTML += `<li>${itemValue}</li>`
// }









/* Challenge: Write a "for loop" to render information to the database */








// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     clearInputFieldEl()

//     appendItemToShoppingListEl(inputValue)
// })

// onValue(shoppingListInDB, function(snapshot) {
//     let itemsArray = Object.values(snapshot.val())
    
//     // Challenge: Write a for loop to iterate on itemsArray and console log each item
//     //     console.log(itemsArray[i])

//     for (let i = 0; i < itemsArray.length; i++) {
        
//          // Challenge: Use the appendItemToShoppingListEl(itemValue) function inside of the 
//           //for loop to append item to the shopping list element for each iteration.
        
//         /* My Solution */ 
//         // let itemValue = itemsArray[i]
         
//         //   appendItemToShoppingListEl(itemValue)
//         // }

//         /* Instructor's Solution */
//         appendItemToShoppingListEl(itemsArray[i])
//     }
// })

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(itemValue) {
//     shoppingListEl.innerHTML += `<li>${itemValue}</li>`
// }










/* Challenge: Smash the Bug that's in the code:
(The bug is that the list has multiple items of the same) */







// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     clearInputFieldEl()

//     // appendItemToShoppingListEl(inputValue) --> 
//     // this piece of code 
//     // that was contributing to the duplication 
//     // bug
// })

// onValue(shoppingListInDB, function(snapshot) {
//     let itemsArray = Object.values(snapshot.val())

//     /* To fix the repetition of the items in the array,
//     do this */
    
//     // shoppingListEl.innerHTML = "" 
    
//     // But there's a duplication with the last entry,
//     // so that means the code is running twice.
//     // Therefore, we need to remove a line of code and that line
//     // is the appendItemToShoppingListEl(inputValue) --> the code above

//     /* Now let's refactor the above code */

//     clearShoppingListEl()
    
//     for (let i = 0; i < itemsArray.length; i++) {
//         appendItemToShoppingListEl(itemsArray[i])
//     }
// })

// function clearShoppingListEl() {
//     shoppingListEl.innerHTML = ""
// }

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(itemValue) {
//     shoppingListEl.innerHTML += `<li>${itemValue}</li>`
// }








// This was a CSS Challenge with Flexbox for the list items,
// so same JS code ....








// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     clearInputFieldEl()
// })

// onValue(shoppingListInDB, function(snapshot) {
//     let itemsArray = Object.entries(snapshot.val())
    
//     clearShoppingListEl()
    
//     for (let i = 0; i < itemsArray.length; i++) {
//         let currentItem = itemsArray[i]

//         appendItemToShoppingListEl(currentItem)
//     }
// })

// function clearShoppingListEl() {
//     shoppingListEl.innerHTML = ""
// }

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(itemValue) {
//     shoppingListEl.innerHTML += `<li>${itemValue}</li>`
// }









// Challenge: Getting ID of item in Database








// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     clearInputFieldEl()
// })

// onValue(shoppingListInDB, function(snapshot) {
//     let itemsArray = Object.entries(snapshot.val())
    
//     clearShoppingListEl()
    
//     for (let i = 0; i < itemsArray.length; i++) {
//         let currentItem = itemsArray[i]
      
//         // Challenge: Make two let variables:
//         // currentItemID and currentItemValue and use currentItem to set both of
//         // them equal to the correct values.
//         let currentItemID = currentItem[0]
//         let currentItemValue = currentItem[1]
        
//         appendItemToShoppingListEl(currentItem)
//     }
// })

// function clearShoppingListEl() {
//     shoppingListEl.innerHTML = ""
// }

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(itemValue) {
//     shoppingListEl.innerHTML += `<li>${itemValue}</li>`
// }








/* createElement Scrim */









// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     clearInputFieldEl()
// })

// onValue(shoppingListInDB, function(snapshot) {
//     let itemsArray = Object.entries(snapshot.val())
    
//     clearShoppingListEl()
    
//     for (let i = 0; i < itemsArray.length; i++) {
//         let currentItem = itemsArray[i]
      
//         // Challenge: Make two let variables:
//         // currentItemID and currentItemValue and use currentItem to set both of
//         // them equal to the correct values.
//         let currentItemID = currentItem[0]
//         let currentItemValue = currentItem[1]
        
//         appendItemToShoppingListEl(currentItem)
//     }
// })

// function clearShoppingListEl() {
//     shoppingListEl.innerHTML = ""
// }

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(item) {

//     let itemID = item[0]
//     let itemValue = item[1]
//     // shoppingListEl.innerHTML += `<li>${itemValue}</li>`

//     /* To use createEl, follow these steps */

//     /* Step 1 */

//     let newEl = document.createElement("li")

//     /* Step 2: Put text between the <li></li> tags */

//     // Challenge: Make it so the item name shows instead of 'Something'
//     // newEl.textContent = "Something"

//     newEl.textContent = itemValue

//     /* Step 3: Put it into the parent element */

//     // The parent element in this case is, "shoppingListEl" 

//     shoppingListEl.append(newEl)
// }













/* Challenge: Removing an Item When Clicked */








// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     clearInputFieldEl()
// })

// onValue(shoppingListInDB, function(snapshot) {
//     let itemsArray = Object.entries(snapshot.val())
    
//     clearShoppingListEl()
    
//     for (let i = 0; i < itemsArray.length; i++) {
//         let currentItem = itemsArray[i]
//         let currentItemID = currentItem[0]
//         let currentItemValue = currentItem[1]
        
//         appendItemToShoppingListEl(currentItem)
//     }
// })

// function clearShoppingListEl() {
//     shoppingListEl.innerHTML = ""
// }

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(item) {
//     let itemID = item[0]
//     let itemValue = item[1]
    
//     let newEl = document.createElement("li")
    
//     newEl.textContent = itemValue
    
//     // Challenge: Attach an event listener to newEl and 
//     // make it so you console log the id of the item when it's pressed.

//     newEl.addEventListener('click', function() {
//         let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)

//         remove(exactLocationOfItemInDB)
//     })
    
//     shoppingListEl.append(newEl)
// }












/* Challenge: Fetch Items from the Database if Snapshot Exists */










// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const shoppingListInDB = ref(database, "shoppingList")

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const shoppingListEl = document.getElementById("shopping-list")

// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(shoppingListInDB, inputValue)
    
//     clearInputFieldEl()
// })

// onValue(shoppingListInDB, function(snapshot) {
//     // Challenge: Change the onValue code so that it uses snapshot.exists() 
//     // to show items when there are items in the database 
//     // and if there are not displays the text 'No items here... yet'.
    
//     if (snapshot.exists()) {
//         let itemsArray = Object.entries(snapshot.val())

//         clearShoppingListEl()
        
//         for (let i = 0; i < itemsArray.length; i++) {
//             let currentItem = itemsArray[i]
//             let currentItemID = currentItem[0]
//             let currentItemValue = currentItem[1]
            
//             appendItemToShoppingListEl(currentItem)
//         } } else {
//             shoppingListEl.innerHTML = "No items here...yet"
//         }
//     }

//     // let itemsArray = Object.entries(snapshot.val())

//     // clearShoppingListEl()
    
//     // for (let i = 0; i < itemsArray.length; i++) {
//     //     let currentItem = itemsArray[i]
//     //     let currentItemID = currentItem[0]
//     //     let currentItemValue = currentItem[1]
        
//     //     appendItemToShoppingListEl(currentItem)
//     // }
// )

// function clearShoppingListEl() {
//     shoppingListEl.innerHTML = ""
// }

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(item) {
//     let itemID = item[0]
//     let itemValue = item[1]
    
//     let newEl = document.createElement("li")
    
//     newEl.textContent = itemValue
    
//     newEl.addEventListener("click", function() {
//         let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        
//         remove(exactLocationOfItemInDB)
//     })
    
//     shoppingListEl.append(newEl)
// }











/* This was a CSS challenge, but just updated the code here */







import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://add-to-cart-e2fbf-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    
    clearInputFieldEl()
})

onValue(shoppingListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearShoppingListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToShoppingListEl(currentItem)
        }    
    } else {
        shoppingListEl.innerHTML = "No items here... yet"
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    shoppingListEl.append(newEl)
}