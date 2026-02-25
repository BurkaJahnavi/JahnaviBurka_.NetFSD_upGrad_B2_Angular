import {
    saveTaskCallback,
    deleteTaskCallback,
    getTasksCallback,
    saveTaskPromise,
    deleteTaskPromise,
    getTasksPromise
} from "./storage.js";

export const addTaskCallback = (task) => {
    saveTaskCallback(task, message => console.log(message));
};

export const deleteTaskUsingCallback = (task) => {
    deleteTaskCallback(task, message => console.log(message));
};

export const listTasksCallback = () => {
    getTasksCallback(tasks => console.log(`Tasks: ${tasks.join(", ")}`));
};

export const addTaskPromiseVersion = (task) => {
    saveTaskPromise(task).then(message => console.log(message));
};

export const deleteTaskPromiseVersion = (task) => {
    deleteTaskPromise(task).then(message => console.log(message));
};

export const listTasksPromiseVersion = () => {
    getTasksPromise().then(tasks => console.log(`Tasks: ${tasks.join(", ")}`));
};

export const addTaskAsync = async (task) => {
    const message = await saveTaskPromise(task);
    console.log(message);
};

export const deleteTaskAsync = async (task) => {
    const message = await deleteTaskPromise(task);
    console.log(message);
};

export const listTasksAsync = async () => {
    const tasks = await getTasksPromise();
    console.log(`Tasks: ${tasks.join(", ")}`);
};