import { Suspense } from "react";
import { memo, FC } from "react";

import { Header } from "../layout/Header";
import { Outlet } from "react-router-dom";

export const HeaderLayout: FC = memo(() => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
});
