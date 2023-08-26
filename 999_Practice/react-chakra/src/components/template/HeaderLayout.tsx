import React from "react";
import { memo, FC } from "react";
import { Header } from "../layout/Header";

type Props = {
  children: React.ReactNode;
};
export const HeaderLayout: FC<Props> = memo(() => {
  return (
    <>
      <Header />
    </>
  );
});
