import { Text } from "@chakra-ui/react";

export const Limit = ({ done, limit }: { done: boolean; limit: Date }) => {
  return (
    <Text color={done ? "green" : new Date() > limit ? "red" : "blue"}>
      {done ? "達成" : new Date() > limit ? "期限切れ" : "未達成"}
    </Text>
  );
};
