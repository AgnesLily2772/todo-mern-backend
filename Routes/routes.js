import express from 'express';

import { getTodo,createTodo, deleteTodo, editTodo, putTodo } from '../Controller/controller.js';

const router = express.Router();

router.get("/",getTodo);

router.post("/",createTodo);

router.get("/:id",putTodo);

router.put("/:id",editTodo);

router.delete("/:id",deleteTodo);

export default router;