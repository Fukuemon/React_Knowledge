import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent } from "react";

import { PrimaryButton } from "../atoms/Button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState("");
  const { loading, login } = useAuth();
  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) =>
    setUserId(event.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify={"center"} height={"100vh"}>
      <Box bg="white" w="sw" p={"4"} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign={"center"}>
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            children={"ログイン"}
            onClick={onClickLogin}
            isLoading={loading}
          />
        </Stack>
      </Box>
    </Flex>
  );
});
