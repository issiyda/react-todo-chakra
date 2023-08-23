import { useState } from "react";
import { ToDo } from "../components/ToDo";
import { ToDoType } from "../types";
import { Box, Flex, Heading } from "@chakra-ui/react";

export const ToDoList = () => {
  const [todos, setToDos] = useState<ToDoType[]>([
    { id: 1, title: "筋トレ", done: false, limit: new Date(2023, 8) },
    { id: 2, title: "勉強", done: false, limit: new Date(2023, 8) },
    { id: 3, title: "犬の散歩", done: false, limit: new Date(2023, 7) },
    { id: 4, title: "洗濯", done: false, limit: new Date(2023, 7) },
    { id: 5, title: "料理", done: false, limit: new Date(2023, 7) },
  ]);

  const setToDoItem = (todoItem: ToDoType) => {
    const newTodos: ToDoType[] = todos.map((todo) => {
      if (todo.id === todoItem.id) {
        return {
          ...todo,
          ...todoItem,
        };
      }
      return todo;
    });
    setToDos(newTodos);
  };

  return (
    <>
      <Flex justifyContent={"space-between"} w={"80vw"}>
        <Box>
          <Heading as={"h2"}>ToDoList(未完了)</Heading>
          {todos
            .filter((todo) => !todo.done)
            .map((filteredTodo) => (
              <ToDo
                key={filteredTodo.id}
                todo={filteredTodo}
                setToDo={setToDoItem}
              />
            ))}
        </Box>
        <Box>
          <Heading as={"h2"}>ToDoList(完了)</Heading>
          {todos
            .filter((todo) => todo.done)
            .map((filteredTodo) => (
              <ToDo
                key={filteredTodo.id}
                todo={filteredTodo}
                setToDo={setToDoItem}
              />
            ))}
        </Box>
      </Flex>
    </>
  );
};
