import React from "react";
import ChangeTodo from "./ChangeTodo";
import { todoProps } from "@/app/types";
import EditTodos from "./EditTodos";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  return (
    <div className="w-10/12 flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase grow">{todo.title}</span>
      <div className="flex items-center mx-2">
        <EditTodos todo={todo}/>
      </div>
      <div className="flex items-center mx-2">
        <DeleteTodo todo={todo}/>
      </div>
    </div>
  );
};

export default Todo;
