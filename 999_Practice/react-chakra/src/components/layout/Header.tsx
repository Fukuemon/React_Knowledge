import React from "react";
import { memo, FC } from "react";
import { Flex, Heading, Link, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: FC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      align="center"
      color="gray.50"
      padding={{ base: 3, md: 5 }} // base: 320px, md: 768px
      justify="space-between"
    >
      <Flex
        align="center"
        as="a"
        mr={8}
        _hover={{ color: "blue.500", cursor: "pointer" }}
      >
        <Heading as="h1" fontSize={{ base: "mg", md: "lg" }}>
          ユーザー管理アプリ
        </Heading>
      </Flex>
      <Flex
        align="center"
        fontSize={"sm"}
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
        _hover={{ color: "blue.500", cursor: "pointer" }}
      >
        <Box pr={4}>
          <Link>ユーザー一覧</Link>
        </Box>
        <Link>設定</Link>
      </Flex>
      <HamburgerIcon boxSize={8} />
    </Flex>
  );
});
