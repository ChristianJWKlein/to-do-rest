"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getTasks = exports.createTask = void 0;
const connectDb_1 = require("./connectDb");
const createTask = (req, res) => {
    const newTask = {
        task: req.body.task,
        done: false,
    };
    const db = (0, connectDb_1.connectDb)();
    db.collection("tasks")
        .add(newTask)
        .then((doc) => res.status(201).send(doc.id))
        .catch((err) => res.status(500).send(err));
};
exports.createTask = createTask;
const getTasks = (req, res) => {
    const db = (0, connectDb_1.connectDb)();
    db.collection("tasks")
        .get()
        .then((snapshot) => {
        const taskList = snapshot.docs.map((doc) => {
            let task = doc.data();
            task.id = doc.id;
            return task;
        });
        res.send(taskList);
    })
        .catch((err) => res.status(500).send(err));
};
exports.getTasks = getTasks;
const updateTask = (req, res) => {
    const { taskId } = req.params;
    const isDone = req.body.done;
    const db = (0, connectDb_1.connectDb)();
    db.collection("tasks")
        .doc(taskId)
        .update({ done: isDone })
        .then((doc) => res.status(202).send(doc))
        .catch((err) => res.status(500).send(err));
};
exports.updateTask = updateTask;
// export const deleteTask = (req: Request, res: Response) => {
//   const { task } = req.params.docId;
//   const db = connectDb();
//   db.collection("tasks")
//     .doc(task)
//     .delete()
//     .then(() => res.status(204).send("Task Deleted"))
//     .catch((err) => res.status(500).send(err));
// };
