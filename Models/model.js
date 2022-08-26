import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    title:String,
    description:String
})

const ToDo = mongoose.model('TODO',TodoSchema);
export default ToDo;