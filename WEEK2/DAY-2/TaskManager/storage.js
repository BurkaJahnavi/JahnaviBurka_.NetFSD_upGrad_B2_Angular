let tasks = [];

export const saveTaskCallback = (task, callback) => {
    setTimeout(() => {
        tasks.push(task);
        callback(`Task "${task}" added successfully`);
    }, 1000);
};

export const deleteTaskCallback = (task, callback) => {
    setTimeout(() => {
        tasks = tasks.filter(t => t !== task);
        callback(`Task "${task}" deleted successfully`);
    }, 1000);
};

export const getTasksCallback = (callback) => {
    setTimeout(() => {
        callback(tasks);
    }, 1000);
};

export const saveTaskPromise = (task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            tasks.push(task);
            resolve(`Task "${task}" added successfully`);
        }, 1000);
    });
};

export const deleteTaskPromise = (task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            tasks = tasks.filter(t => t !== task);
            resolve(`Task "${task}" deleted successfully`);
        }, 1000);
    });
};

export const getTasksPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 1000);
    });
};