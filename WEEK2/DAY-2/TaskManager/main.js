import {
    addTaskCallback,
    deleteTaskUsingCallback,
    listTasksCallback,
    addTaskPromiseVersion,
    deleteTaskPromiseVersion,
    listTasksPromiseVersion,
    addTaskAsync,
    deleteTaskAsync,
    listTasksAsync
} from "./taskManager.js";

addTaskCallback("Study JavaScript");
addTaskCallback("Practice DSA");

setTimeout(() => {
    listTasksCallback();
}, 2500);

setTimeout(() => {
    addTaskPromiseVersion("Learn Promises");
    setTimeout(() => {
        listTasksPromiseVersion();
    }, 1500);
}, 4000);

setTimeout(async () => {
    await addTaskAsync("Master Async/Await");
    await deleteTaskAsync("Practice DSA");
    await listTasksAsync();
}, 7000);