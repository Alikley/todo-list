import React from "react";
import Input from "../inputs/Input";
import Button from "../button/Button";
import Form from "../forms/form";

const AddTodo = () => {
  return (
    <div>
      <Form >
        <div className="flex gap-2">
          <Input name="input" type="text" placeholder="Add Todo Here..." />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
