// Create an alert that lists all users, with their ids, names and what city they're from.
// console.log(users);
const simplifiedArray = [];

for (const user of users) {
    const simplifiedUserString = `${user.id} - ${user.name}, ${user.address.city}\n`
    simplifiedArray.push(simplifiedUserString);
}

const finalStringList = simplifiedArray.join("");
alert(finalStringList);

// Prompt the user for a user id.
const userPrompt = prompt("Please enter your user id");

// Display an alert with the username and all the todos titles that belong to that user.
const todosArray = [];
for (const todo of todos) {
    if (Number(userPrompt) === todo.userId) {
        const userTodoList = `${todo.title}\n`;
        todosArray.push(userTodoList);
    }
}

const finalTodosList = todosArray.join("+ ");
alert(`Your ID is ${userPrompt} and these are your ToDos:\n+ ${finalTodosList}`);


// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list.



// Challenge 2
// Now that you can add a todo, add the option to either delete or update a todo.
// Add also the option to repeatedly choose a different user, or to finish the program.