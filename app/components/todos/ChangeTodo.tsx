import React from "react";
import Form from "../forms/form";
import Input from "../inputs/Input";
import Button from "../button/Button";
import * as actions from "@/app/actions";
import { todoProps } from "@/app/types";
import { FaCheck } from "react-icons/fa";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden"></Input>
      <Button
        type="submit"
        text={<FaCheck />}
        actionButton
        bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}
      ></Button>
    </Form>
  );
};

export default ChangeTodo;
