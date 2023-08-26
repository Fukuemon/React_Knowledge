import React, { useCallback } from "react";
import { memo, FC } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/home", { state: { id: "1" } });
  };
  const onClickUserManagement = () => navigate("/home/user_management");
  const onClickSetting = () => navigate("/home/setting"); // ここでのhistoryはuseHistory()の戻り値

  return (
    <>
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
          onClick={onClickHome}
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
        >
          <Box pr={4}>
            <Link
              onClick={onClickUserManagement}
              _hover={{ color: "blue.500", cursor: "pointer" }}
            >
              ユーザー一覧
            </Link>
          </Box>
          <Link
            onClick={onClickSetting}
            _hover={{ color: "blue.500", cursor: "pointer" }}
          >
            設定
          </Link>
        </Flex>

        <HamburgerIcon
          boxSize={8}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  );
});
