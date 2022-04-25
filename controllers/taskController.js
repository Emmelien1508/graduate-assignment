let taskList = [
    {
        _id: 1,
        name: "Clean the house",
        createdDate: "04/24/2022",
        status: "pending"
    },
    {
        _id: 2,
        name: "Get groceries",
        createdDate: "04/24/2022",
        status: "completed"
    },
    {
        _id: 3,
        name: "Cook dinner",
        createdDate: "04/24/2022",
        status: "pending"
    },
];
let maxId = taskList.length;

class TaskService {
    // basic task list method
    static list() {
        return taskList;
    }
    
    // get task with specific ID method
    static get(id) {
        return taskList.find((el) => {return el._id ==id});
    }

    // create a new task
    static create(newTask) {
        if (!newTask._id) {
            newTask._id = ++maxId;
        }
        taskList.push(newTask);
        return newTask;
    }

    // updates existing task with new data
    static update(id, data) {
        let task = this.get(id);
        if (task) {
            const updatedTask = Object.assign(task, data);
            return updatedTask;
        } else {
            return null;
        }
    }

    // delete existing task
    static delete(id) {
        let task = this.get(id);
        if (task) {
            taskList = taskList.filter(el => el._id != id);
            return task;
        } else {
            return null;
        }
    }
}

module.exports.TaskService = TaskService;