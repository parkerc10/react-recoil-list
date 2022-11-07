import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "./atoms";

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [loginStatus, setLoginStatus] = useRecoilState(loginState);
  let navigate = useNavigate();

  const login = () => {
    if (user && pass) {
      if (user === 'Parker' && pass === 'Cohen') {
        setLoginStatus('wiehfiuwh132u4hgeuygwe');
        navigate('/')
      }
    }
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="mb-4 flex flex-col">
        <label>Username</label>
        <input className="rounded p-2" value={user} onChange={(e) => setUser(e.target.value)}/>
      </div>
      <div className="mb-4 flex flex-col">
        <label>Password</label>
        <input className="rounded p-2" value={pass} onChange={(e) => setPass(e.target.value)}/>
      </div>
      <button className="rounded p-2 bg-yellow-500 cursor-pointer hover:bg-yellow-800" onClick={login}>Login</button>
    </div>
  )
}

export default Login;