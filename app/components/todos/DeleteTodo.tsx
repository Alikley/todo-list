import React from "react";
import Button from "../button/Button";
import { FaTrash } from "react-icons/fa";

import * as actions from "@/app/actions";
import { todoProps } from "@/app/types";
import Form from "../forms/form";
import Input from "../inputs/Input";
const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-400"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteTodo;
