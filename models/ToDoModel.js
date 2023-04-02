import mongoose from "mongoose";

const ToDoSchema = mongoose.Schema;
const userSchema = new ToDoSchema({
  text: {
    type: String,
    required: true,
  },
  isValid: {
    type: Boolean,
    default: true,
  },
});

const ToDoModel = mongoose.model("ToDo", userSchema);

export default ToDoModel;
