import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https:/jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          navigate("/home");
          [navigate];
        } else {
          alert("ユーザーが見つかりません");
        }
      })
      .catch(() => alert("ログインできませんでした"))
      .finally(() => setLoading(false));
  }, []);
  return { login, loading };
};
