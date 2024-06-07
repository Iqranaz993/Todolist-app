#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

let toDos: string[] = [];
let conditions = true;

console.log(chalk.bold.rgb(204, 204, 204)('\n \t\t ******************************'));
console.log(chalk.bold.rgb(204, 204, 204)('*********************welcome to my todo list app*****************'));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t ******************************\n`))


let main = async () => {
  while (conditions) {
    let answers = await inquirer.prompt([
      {
        name: "choices",
        type: "list",
        message: "select an option you want to do:",
        choices: ["Add Task", "Update Task", "Delete Task", "View Todo_list", "Exit"]
      }
    ]);

    // function to add new task
    if (answers.choices === "Add Task") {
      await AddTask();
    }
    else if (answers.choices === "Update Task") {
      await updateTask();
    }
    else if (answers.choices === "Delete Task") {
      await DeleteTask()
    }
    else if (answers.choices === "View Todo_list") {
      await viewTask();
    }
    else if (answers.choices === "Exit") {
      conditions = false;
    }
  }
}

let AddTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task:"

    }
  ])
  toDos.push(newTask.task);
  console.log(`\n ${newTask.task} task added sucessfully in Todo_list`);
}
// view task in todolist app
let viewTask = () => {
  console.log(`\n Your Todo_list App: \n`);
  toDos.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`)
  })
}

//  function to delete task in todolist app
let DeleteTask = async () => {
  await viewTask()
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the index number you want to delete task:"
    }
  ]);
  let DeleteTask = toDos.splice(taskIndex.index - 1, 1)

  console.log(`\n ${DeleteTask} This task has delete sucessfully from your  Todo_list \n`);

}
//  function to update todolist app
let updateTask = async () => {
  await viewTask()
  let update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the index number you want to delete task:"

    },
    {
      name: "new_task",
      type: "input",
      message: "Enter new task:"
    }
  ]);

  toDos[update_task_index.index - 1] = update_task_index.new_task

  console.log(`\n task at index number . ${update_task_index - 1} updated sucessfully [for updated list check option: "view Todo_list"] \n`);

}
main(); 