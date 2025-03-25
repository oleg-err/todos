import React from "react";
import { Checkbox, List, Typography } from "antd";
import { Todo } from "../types";

export const TodoItem: React.FC<{ todo: Todo; toggleTodo: (id: number) => void }> = ({ todo, toggleTodo }) => (
  <List.Item onClick={() => toggleTodo(todo.id)} style={{ cursor: "pointer", justifyContent: 'flex-start'}}>
    <Checkbox type="checkbox" checked={todo.completed} />
    <Typography.Text style={{ textDecoration: todo.completed ? "line-through" : "none", marginLeft: "8px" }}>
      {todo.text}
    </Typography.Text>
  </List.Item>
);