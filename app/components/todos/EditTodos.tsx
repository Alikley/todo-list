'use client'
import { todoProps } from "@/app/types";
import React, { useState } from "react";
import Button from "../button/Button";
import { MdEdit } from "react-icons/md";
import Form from "../forms/form";
import * as actions from "@/app/actions";
import Input from "../inputs/Input";
const EditTodos = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodoState(!editTodoState);
  };
  const handleSubmit = () => {
    setEditTodoState(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {editTodoState ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden"></Input>
          <div className="flex justify-center ">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit" text="save"></Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodos;
