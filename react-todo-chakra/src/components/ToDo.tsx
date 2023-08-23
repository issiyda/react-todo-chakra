import {
  Box,
  Button,
  Card,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ToDoType } from "../types";
import { Limit } from "./Limit";
import { useState } from "react";

type ToDoPropsType = {
  todo: ToDoType;
  setToDo: (todo: ToDoType) => void;
};

export const ToDo = ({ todo, setToDo }: ToDoPropsType) => {
  const { id, title, done, limit } = todo;
  const [toDoTitle, setToDoTitle] = useState<string>(title);
  const [toDoDate, setToDoDate] = useState<Date>(limit);
  const [todoDone, setTodoDone] = useState<boolean>(done);
  const handleSubmit = (id: number) => {
    if (done) {
      setTodoDone(false);
      setToDo({
        id,
        title: toDoTitle,
        done: false,
        limit: toDoDate,
      });
      return;
    }
    setToDo({
      id,
      title: toDoTitle,
      done: todoDone,
      limit: toDoDate,
    });
  };

  const handleDone = (doneValue: string) => {
    doneValue === "done" ? setTodoDone(true) : setTodoDone(false);
  };
  const handleDate = (date: string) => {
    setToDoDate(new Date(date));
  };
  return (
    <Card
      p={"16px"}
      mb={"16px"}
      shadow={
        " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
      }
      gap={"8px"}
      bg={done ? "gray.300" : ""}
    >
      <Box>
        <Text>{id}</Text>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          {title}
        </Text>
        <Limit done={done} limit={limit} />
      </Box>

      <Input
        type="text"
        value={toDoTitle}
        onChange={(e) => setToDoTitle(e.target.value)}
      />
      <Input
        type="date"
        value={toDoDate.toISOString().slice(0, 10)}
        onChange={(e) => handleDate(e.target.value)}
      />
      <RadioGroup onChange={handleDone}>
        <Stack direction="row">
          <Radio value={"done"}>完了</Radio>
          <Radio value={""}>未完了</Radio>
        </Stack>
      </RadioGroup>
      <Button
        bg={done ? "gray.300" : "#EDF2F7"}
        onClick={() => handleSubmit(id)}
      >
        {done ? "未完了に戻す" : "保存"}
      </Button>
    </Card>
  );
};
