import Router from "express";
import {
  deleteToDo,
  getToDo,
  saveToDo,
  updateToDo,
} from "../controllers/ToDoController.js";

const router = Router();
router.get("/", getToDo);
router.post("/", saveToDo);
router.put("/:id", updateToDo);
router.delete("/:id", deleteToDo);

export default router;
