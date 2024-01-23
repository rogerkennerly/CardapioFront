import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }){

    try{
      const response = await api.post("/sessions", {email, password})
      const {user, token} = response.data;

      localStorage.setItem("@cardapio:user", JSON.stringify(user));
      localStorage.setItem("@cardapio:token", token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      setData({user, token});

    } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possível efetuar o login")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@cardapio:user");
    localStorage.removeItem("@cardapio:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@cardapio:token");
    const user = localStorage.getItem("@cardapio:user");

    if(token && user){
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setData({token, user: JSON.parse(user) });
    }
  }, [])

  return (
    <AuthContext.Provider value={{signIn, user: data.user, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
