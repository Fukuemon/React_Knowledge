import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        // try catchでエラーをキャッチ
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = (await res.json()) as User;
        if (user) {
          navigate("/home");
        } else {
          alert("ユーザーが見つかりません!");
        }
      } catch (err) {
        // エラーが発生した場合
        alert("ログインできませんでした!");
      } finally {
        setLoading(false); // finallyは成功しても失敗しても実行される
      }
    },
    [navigate]
  );
  return { login, loading };

  //   const login = useCallback((id: string) => {
  //     setLoading(true);
  //     axios
  //       .get<User>(`https:/jsonplaceholder.typicode.com/users/${id}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         if (res.data) {
  //           navigate("/home");
  //           [navigate];
  //         } else {
  //           alert("ユーザーが見つかりません");
  //         }
  //       })
  //       .catch(() => alert("ログインできませんでした"))
  //       .finally(() => setLoading(false));
  //   }, []);
  //   return { login, loading };
};
