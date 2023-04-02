import Router from "express";
import ToDoModel from "../models/ToDoModel.js";

export const getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

export const saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added Succesfuly");
    console.log(data);
    res.send(data);
  });
};

export const updateToDo = async (req, res) => {
  const { id } = req.params;
  ToDoModel.findByIdAndUpdate(id, { isValid: false })
    .then(() => {
      res.send("Striked Successfully");
    })
    .catch((err) => console.log(err));
};

export const deleteToDo = async (req, res) => {
  const { id } = req.params;
  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => console.log(err));
};
