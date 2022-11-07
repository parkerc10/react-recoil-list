import { listState, loginState } from "./atoms";
import { useRecoilValue, useRecoilState } from "recoil";

const Counter = () => {
  const list = useRecoilValue(listState);
  const [loginStatus, setLoginStatus] = useRecoilState(loginState);

  const logout = () => {
    setLoginStatus(false)
  }

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl mb-3">Current Count: {list.length}</h1>
      <button className="bg-green-400 p-3 rounded hover:bg-green-900 text-white mb-1" onClick={logout}>Logout</button>
    </div>
  )
}

export default Counter;