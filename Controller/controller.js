import mongoose from 'mongoose';
import ToDo from '../Models/model.js'
import express from 'express';

const router = express.Router();
export const getTodo = async(req,res) => {
    try {
        const todos = await ToDo.find();
        res.status(200).json({todos})
    } catch (error) {
        res.status(404).json({message:"CANNOT GET"+error.message})
    }
};

export const putTodo = async (req,res) => {
    const {id} = req.params;
    try {
        const todo = await ToDo.findById(id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({message:"CANNOT GET"+error.message});
    }
}

export const createTodo =async(req,res) => {
     const {title,description} = req.body;
     const ToDoItem = new ToDo({title,description});
     try {
        await ToDoItem.save();
        res.status(200).json(ToDoItem);
     } catch (error) {
        res.status(404).json({message:error.message})
     }

}

export const deleteTodo = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send(`no todo with id: ${id}`);
    }
    else{
        await ToDo.findByIdAndDelete(id);
        res.status(200).json({message:"Todo Deleted Successfully"})
    }

}

export const editTodo = async(req,res) =>{
    const {id} = req.params;
    const {title,description} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send(`no todo with id: ${id}`);
    }
    else{
        const editedTodo = {title,description,_id:id};
        await ToDo.findByIdAndUpdate(id,editedTodo,{new:true});
        res.status(200).json({message:"Edited"})
    }
}

export default router;