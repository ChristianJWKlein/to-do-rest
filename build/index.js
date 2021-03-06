"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tasks_1 = require("./src/tasks");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Routes
app.post("/tasks", tasks_1.createTask);
app.get("/tasks", tasks_1.getTasks);
app.get("/tasks/notdone", tasks_1.getNotDoneTasks);
app.get("/tasks/done", tasks_1.getDoneTasks);
app.patch("/tasks/:taskId", tasks_1.updateTask);
// app.delete("/tasks/:taskId", deleteTask);
app.listen(PORT, () => {
    console.log("Listening on Port: ", PORT);
});
