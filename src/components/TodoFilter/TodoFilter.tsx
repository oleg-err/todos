import React from "react";
import { Button, Flex, Radio, Typography } from "antd";
import { Filters, Todo } from "../types";

const FILTERS_CONFIG: Record<Filters, Filters> = {
  all: "all",
  active: "active",
  completed: "completed",
};

export const TodoFilter: React.FC<{
  setFilter: (filter: Filters) => void;
  clearCompleted: () => void;
  todos: Todo[];
  filter: Filters;
}> = ({ setFilter, clearCompleted, todos, filter }) => (
  <Flex
    justify="space-between"
    flex={1}
    align="center"
    style={{ marginTop: "10px" }}
  >
    <Typography.Text>
      {todos.filter((todo) => !todo.completed).length}&nbsp;items&nbsp;left
    </Typography.Text>
    <Radio.Group value={filter} onChange={(e) => setFilter(e.target.value)}>
      <Radio.Button value={FILTERS_CONFIG.all}>All</Radio.Button>
      <Radio.Button value={FILTERS_CONFIG.active}>Active</Radio.Button>
      <Radio.Button value={FILTERS_CONFIG.completed}>Completed</Radio.Button>
    </Radio.Group>
    <Button onClick={clearCompleted} danger>
      Clear completed
    </Button>
  </Flex>
);
