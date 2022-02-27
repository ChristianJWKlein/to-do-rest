import express from 'express';
import cors from 'cors';
import { getTasks, createTask, updateTask, getDoneTasks, getNotDoneTasks  } from "./src/tasks";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.post("/tasks", createTask);
app.get("/tasks", getTasks);
app.get("/tasks/notdone", getNotDoneTasks);
app.get("/tasks/done", getDoneTasks);
app.patch("/tasks/:taskId", updateTask);
// app.delete("/tasks/:taskId", deleteTask);

app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
});
