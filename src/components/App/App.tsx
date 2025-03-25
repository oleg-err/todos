import React, { useState } from "react";
import { Input, Layout, List, Typography } from "antd";
import { Content } from "antd/es/layout/layout";

import { TodoItem } from "../TodoItem/TodoItem";
import { TodoFilter } from "../TodoFilter/TodoFilter";
import { Filters, Todo } from "../types";

  const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filters>("all");
  const [inputValue, setInputValue] = useState<string>("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <Layout style={{ minHeight: "100vh", background: "#fafafa", padding: "20px" }}>
      <Content style={{ minWidth: "500px", margin: "0 auto" }}>
        <Typography.Title level={1} style={{ textAlign: "center", color: "#ddd" }}>todos</Typography.Title>
        <Input
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={addTodo}
          maxLength={40}
          style={{marginBottom: 12}}
        />
        <List
          bordered
          dataSource={filteredTodos}
          renderItem={todo => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          )}
        />
        <TodoFilter filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} todos={todos} />
      </Content>
    </Layout>
  );
};

export default App