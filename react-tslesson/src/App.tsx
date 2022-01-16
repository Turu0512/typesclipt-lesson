import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./components/Todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoText = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodoText} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
